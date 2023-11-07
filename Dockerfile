FROM node:20

RUN mkdir -p /home/app

WORKDIR /home/app

COPY . .

EXPOSE 3000

RUN npm i

CMD ["npm", "run", "dev"]
