SHELL=/bin/bash -o pipefail
COMPONENTS := api frontend dbagent gateway
UP_COMPONENTS := gateway dbagent

################################################################################
### Config variables
###

# Load them from an optional .env file
-include .env
.EXPORT_ALL_VARIABLES: ;

# Specify which docker tag is to be used
DOCKER_TAG := $(or ${DOCKER_TAG},${DOCKER_TAG},latest)
DOCKER_REGISTRY := $(or ${DOCKER_REGISTRY},${DOCKER_REGISTRY},q8s.quadrabee.com)

################################################################################
### Specific build args per images
###
frontend_BUILD_ARGS :=

################################################################################
### Main rules
###

# Cleans all compilation and docker assets of all components.
# Make sure you have some time to rebuild them after that ;-)
#
# An individual .clean task exists on each component as well
clean: $(addsuffix .clean,$(COMPONENTS))
	rm **/Dockerfile*.built **/Dockerfile*.log

# Builds all docker images of all components, making sure to rebuild
# everything needed for the last source code to be included.
#
# An individual .image task exists on each component as well
image: $(addsuffix .image,$(COMPONENTS))
images: image

# Pushes all docker images of all components to the private registry
#
# An individual .image task exists on each component as well
push-images: $(addsuffix .push,$(COMPONENTS))

q8s-build: images push-images

# Shortcut over docker-compose ps
ps:
	docker-compose ps

# Puts the software up.
#
# We trust the current docker-compose environment here, and simply
# delegate to api.up. Since we make sure that all images are
# build and --force-recreate is used, the last version of each
# component should be up on success
up: $(addsuffix .image,$(COMPONENTS)) $(addsuffix .up,$(UP_COMPONENTS))
	docker-compose ps

# Puts the entire software down.
#
# All docker containers are stopped.
down:
	docker-compose stop

# Purges all stopped containers and dangling docker images
#
# This rule can be used to get some disk Gb back...
purge:
	docker rmi $$(docker images --filter dangling=true -q 2>/dev/null) 2>/dev/null;\
  docker rm -v $$(docker ps --filter status=exited -q 2>/dev/null) 2>/dev/null

# Restarts the whole software, without rebuilding images.
#
# Handy to get started hacking without waiting too much.
restart: gateway.restart

################################################################################
# Automatic generation of the standard rules
#

# In addition to the main rules above, each architectural component at least
# have the following standard rules, which are dynamically defined below:
#
# - component.image: builds the docker image, rebuilding source code if needed
# - component.down:  shuts down the component
# - component.up:    wakes up the component, making sure the last version runs
# - component.on:    wakes up the component, taking the last known image
# - component.clean: cleans everything, only useful for rebuilding from scratch

# The following macro defines the standard rules
# for a given component, say $1.
define make-goal
$1/Dockerfile.built: $1/Dockerfile $(shell find $1 -type f | grep -v "\/tmp\|\.idea\|\.bundle\|\.log\|\.bash_history\|\.class\|\.pushed\|\.built\|target\|wp-content\|backups\|vendor\|node_modules\|screenshots" | sed 's/ /\\ /g')
	docker build ${$1_BUILD_ARGS} -t $(shell echo orgo/$1 | tr A-Z a-z) ./$1 | tee $1/Dockerfile.log
	touch $1/Dockerfile.built

$1.image: $1/Dockerfile.built

# Shuts the component down
$1.down:
	docker-compose stop $1

# Wakes the component up
$1.up: $1.image
	docker-compose up -d --force-recreate $1

# Ensures the component is running
$1.on:
	docker-compose up -d $1

$1.restart:
	docker-compose stop $1
	docker-compose up -d $1

# Show logs in --follow mode for the component
$1.logs:
	docker-compose logs --tail=100 -f $1

# Opens a bash shell on the component
$1.bash:
	docker-compose exec $1 bash

# Removes every compilation/docker assets for the component
$1.clean:
	rm -rf $1/Dockerfile.log $1/Dockerfile.pushed $1/Dockerfile.built

# Pushes the image to the private repository
$1/Dockerfile.pushed: $1/Dockerfile.built
	@if [ -z "$(DOCKER_REGISTRY)" ]; then \
		echo "No private registry defined, ignoring. (set DOCKER_REGISTRY or place it in .env file)"; \
		return 1; \
	fi
	docker tag orgo/$1 $(DOCKER_REGISTRY)/orgo/$1:$(DOCKER_TAG)
	docker push $(DOCKER_REGISTRY)/orgo/$1:$(DOCKER_TAG) | tee -a $1/Dockerfile.log
	touch $1/Dockerfile.pushed

$1.push: $1/Dockerfile.pushed
endef

# Generate all standard rules for all components.
$(foreach component,$(COMPONENTS),$(eval $(call make-goal,$(component))))

################################################################################
### Kubernetes rules
###

# Lists all pods of the namespace
kpods:
	kubectl -n $(K8S_NAMESPACE) get pod

# Touches all components and engines
ktouch: $(addsuffix .ktouch,$(K8S_COMPONENTS))

# Defines the following targets for each component:
#
# - component.klogs: show the pod logs for the component
# - component.kbash: opens a bash on the component
define make-k8s-targets
$1.klogs:
	kubectl -n $(K8S_NAMESPACE) logs -f `kubectl -n $(K8S_NAMESPACE) get pod --no-headers -o custom-columns=":metadata.name" | grep $(K8S_PREFIX) | grep $1 | tail -n 1`

$1.kbash:
	kubectl -n $(K8S_NAMESPACE) exec -it `kubectl -n $(K8S_NAMESPACE) get pod --no-headers -o custom-columns=":metadata.name" | grep $(K8S_PREFIX) | grep $1 | tail -n 1` bash

$1.ktouch:
	kubectl patch deployment -n $(K8S_NAMESPACE) $1 -p "{\"spec\":{\"template\":{\"metadata\":{\"annotations\":{\"deployed\":\"`date +'%s'`\"}}}}}"

endef

# Generate all standard rules for all components.
$(foreach component,$(COMPONENTS),$(eval $(call make-k8s-targets,$(component))))

################################################################################
### Database(s) rules
###
db.on:
	docker-compose up -d dbagent

db.seed: db.on
	docker-compose exec -T dbagent bundle exec rake db:seed[test]

db.empty: db.on
	docker-compose exec dbagent bundle exec rake db:seed[empty]

db.ping: db.on
	docker-compose exec dbagent bundle exec rake db:ping

db.wait: db.on
	docker-compose exec -T dbagent bundle exec rake db:wait

db.spy: db.on
	docker-compose exec dbagent bundle exec rake db:spy

db.migrate:
	docker-compose exec -T dbagent rake db:migrate

db.scratch:
	docker-compose exec -T dbagent rake db:drop db:create

db.create:
	docker-compose exec -T dbagent rake db:ping db:create db:migrate

################################################################################
### Specific project rules
###

frontend/Dockerfile: frontend/Dockerfile.builder.built
frontend.builder: frontend/Dockerfile.builder.built

frontend/Dockerfile.builder.built: frontend/Dockerfile.builder frontend/package.json
	docker build frontend ${frontend_BUILD_ARGS} -t orgo/frontend-builder -f frontend/Dockerfile.builder | tee frontend/Dockerfile.builder.log
	touch frontend/Dockerfile.builder.built
