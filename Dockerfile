FROM node:16-alpine as builder

USER node

RUN mkdir -p /home/node/app

WORKDIR /home/node/app

COPY --chown=node:node package*.json ./

RUN npm ci

COPY --chown=node:node . ./

RUN npm run build



FROM nginx:alpine

WORKDIR /usr/share/nginx/html

# COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /home/node/app/dist .

# EXPOSE 8080

# CMD [ "nginx", "-g daemon off;"  ]



