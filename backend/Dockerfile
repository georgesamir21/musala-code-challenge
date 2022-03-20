FROM node:16
WORKDIR /app/api
COPY package.json /app/api/
RUN npm install
COPY . /app/api/
EXPOSE 8000
CMD ["npm", "start"]