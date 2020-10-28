FROM node:10-alpine

WORKDIR /home/app/
EXPOSE 3000

RUN apk add bash && npm install -g supervisor

COPY package*.json ./

RUN npm install

COPY . .

CMD ["supervisor", "src/index.js"]
