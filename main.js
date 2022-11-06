require('dotenv').config()
const express = require('express');
const mongoose = require("mongoose");

const app = express();
const port = 3000;
app.use(express.json());

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_URL}/${process.env.MONGO_DB}?retryWrites=true&w=majority`)
    .then((mongoDB) => {
        console.log(mongoDB);
        console.log("Connected to MongoDB.");
        app.use('/', require('./src/routes'))
        app.listen(port, () => {
            console.log(`Server Started at port ${port}`)
        });
    })
    .catch((error) => {
        console.error(error)
    });

module.exports = app;