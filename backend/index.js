const express = require('express');
const mongoose = require('mongoose');
const { gatewaysRouter } = require('./src/routes');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;
mongoose
  .connect(
    `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(() => console.log('Connected to DB!'))
  .catch((err) => console.log('Error Connect to DB!', err));

const server = express();
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});
server.use(express.json());
server.get('/', (req, res) => res.send('Welcome to Gateway API!'));
server.use('/gateways', gatewaysRouter);
server.use('**', (req, res) => res.status(404).send('Page not found'));
// start the server...
server.listen(8000, () => {
  console.log('Server is up and running, enjoy!');
});
