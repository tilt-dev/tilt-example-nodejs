FROM node:20

WORKDIR /app

ADD . .

RUN yarn install

ENTRYPOINT [ "node", "/app/index.js" ]
