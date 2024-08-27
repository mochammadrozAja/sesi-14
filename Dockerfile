FROM node:22

WORKDIR /app

ENV port=3000

COPY package.json ./

RUN npm i

CMD [ "node", "start" ]