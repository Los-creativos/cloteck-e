FROM node:20

RUN mkdir -p /home/app

WORKDIR /home/app

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "next"]
