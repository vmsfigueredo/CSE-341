const express = require('express');
const app = express();
const port = 3000;


app.use('/', require('./src/routes'))

app.listen(port, () => {
    console.log("Server Started")
});