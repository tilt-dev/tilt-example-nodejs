FROM node:10

# Default value; will be overridden by build_args, if passed
ARG node_env=production

ENV NODE_ENV $node_env

WORKDIR /app

ADD package.json .
ADD yarn.lock .
RUN yarn install

ADD . .

ENTRYPOINT [ "node", "/app/index.js" ]
