FROM node:14.15.4

# Install DEB dependencies and others.
RUN \
    set -x \
    && apt-get update \
    && apt-get install -y net-tools build-essential valgrind

WORKDIR /app

COPY package.json .
COPY tsconfig.json .
COPY src src
RUN npm install

ENV LIFEMEET_REDIS_HOST="host.docker.internal"
ENV LIFEMEET_REDIS_PORT=6379
ENV MONGODB_CONNECTION_STRING=mongodb://root:rootpassword@host.docker.internal:27017
ENV MONGODB_NAME=life-meet


CMD npm run start
