const express = require('express');
const mongoose = require('mongoose');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/static', express.static(__dirname + '/assert'));


app.use('/api/cars', require('./routes/routes'));


mongoose.connect('mongodb://localhost:27017').then(() => {
    app.listen(port, () => {
        console.log(`app listen on port ${port}`);
    })
})