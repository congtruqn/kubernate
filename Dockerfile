FROM node:14

WORKDIR /usr/src/app

ENV PORT 3000

COPY package*.json ./

RUN npm install

# Copy the local code to the container
COPY . .


# Start the service
CMD npm start