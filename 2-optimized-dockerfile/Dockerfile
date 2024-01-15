FROM node:20

WORKDIR /app

ADD package.json .
ADD yarn.lock .
RUN yarn install

ADD . .

ENTRYPOINT [ "node", "/app/index.js" ]
