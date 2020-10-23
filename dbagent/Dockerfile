FROM enspirit/dbagent:2.1.0

COPY data       /home/app/data
COPY migrations /home/app/migrations

CMD bundle exec rackup -p 80 -o 0.0.0.0
