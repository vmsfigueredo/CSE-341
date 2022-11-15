require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_URL}/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
  )
  .then(() => {
    // eslint-disable-next-line no-console
    console.log('Connected to MongoDB.');
    app.use('/', require('./src/routes'));
    app.listen(port, () => {
      // eslint-disable-next-line no-console
      console.log(`Server Started at port ${port}`);
    });
  })
  .catch(error => {
    // eslint-disable-next-line no-console
    console.error(error);
  });

module.exports = app;
