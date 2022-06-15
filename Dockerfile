FROM node:14-alpine as builder

WORKDIR /usr/www/html

COPY package.json ./
COPY package-lock.json ./

RUN npm ci

RUN npm run build



