FROM node:10-alpine

WORKDIR /home/app/
EXPOSE 3000

RUN apk add bash

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run transpile

CMD ["npm", "run", "start"]