# Base Images

FROM node:alpine

WORKDIR /usr/app

# when changes in package.json then run this
COPY ./package.json ./
RUN npm install


# when changes in any file except package.json
COPY ./ ./


# run middle commands






# start application
CMD ["npm", "start"]