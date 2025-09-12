FROM node:22

WORKDIR /the/workdir/path
COPY package*.json ./
COPY . .
RUN npm install
EXPOSE 8080

CMD ["node", "app.js"]
