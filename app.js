require('dotenv').config();

const express = require('express');
const app = express();
const port = 3000;
const router = require('./routes/index');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(router);

const server = app.listen(port, () => {
    console.log(`Server berjalan di port ${port}`);
  });

module.exports = app;
