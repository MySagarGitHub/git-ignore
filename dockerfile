FROM node:22

WORKDIR /the/workdir/path

COPY . .
RUN npm install
COPY package*.json ./
CMD ["node", "app.js"]
