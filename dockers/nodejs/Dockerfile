FROM node:13.7-stretch-slim

WORKDIR /app

COPY source/nodejs/package*.json .

RUN npm install

COPY source/nodejs/ .

EXPOSE 80
CMD ["node", "index.js"]