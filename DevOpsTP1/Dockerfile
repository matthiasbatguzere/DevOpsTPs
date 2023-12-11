FROM node:14 AS builder

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build 2>&1

CMD npm start
