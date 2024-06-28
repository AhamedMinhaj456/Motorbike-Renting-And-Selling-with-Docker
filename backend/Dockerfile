FROM node:20.15.0

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npm rebuild bcrypt --build-from-source

EXPOSE 8085

CMD ["npm","run", "dev"]


