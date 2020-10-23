FROM node:10-alpine

WORKDIR /home/app/
EXPOSE 3000

RUN apk add bash

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "start"]
