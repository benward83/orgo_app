FROM nginx:1.17-alpine

RUN apk add bash

RUN rm -rf /etc/nginx/conf.d/default.conf
COPY ./conf/ ./conf/proxy.conf /etc/nginx/
COPY ./enable-sites.sh /etc/nginx/

CMD /etc/nginx/enable-sites.sh && nginx -g 'daemon off;'
