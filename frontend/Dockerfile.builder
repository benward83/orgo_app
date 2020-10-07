FROM node:10-alpine

WORKDIR /home/app

RUN apk add bash && \
  cd /home/app && \
  npm install