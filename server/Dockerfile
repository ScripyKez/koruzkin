FROM node:latest

COPY package.json package.json

RUN npm install
COPY . .

EXPOSE 8080
CMD ["node", "server.js"]

