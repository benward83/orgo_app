FROM node:10-alpine

WORKDIR /home/app

COPY package.json ./

RUN apk add bash && \
  npm install
