FROM node:22

WORKDIR /the/workdir/path
COPY package*.json ./
COPY . .
RUN npm install

CMD ["node", "app.js"]
