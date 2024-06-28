FROM node:20.15.0

WORKDIR /app

# This will copy package.json and package-lock.json
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]