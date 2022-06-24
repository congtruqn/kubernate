FROM node:14

WORKDIR /usr/src/app

ENV PORT 8080
ARG _MONGO_DSN
ENV MONGO_DSN $_MONGO_DSN

COPY package*.json ./

RUN npm install

# Copy the local code to the container
COPY . .


# Start the service
CMD npm start