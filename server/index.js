require('dotenv').config();
const express = require('express');

const controller = require('./controller');

const app = express();

const {
  SERVER_PORT
} = process.env;

app.use( express.static( `${__dirname}/../build` ) );
app.use(express.json());

app.get('/api/test/:thing', controller.test);

app.listen(SERVER_PORT, () => console.log(`Listening on ${SERVER_PORT}`));