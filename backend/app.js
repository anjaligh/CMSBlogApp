const express = require('express');
const mongoose = require('mongoose');

// const registerData = require('./model/registermodel')
const cors = require('cors');
// const multer  = require('multer');
const bodyparser = require('body-parser');
// const userauth = require('./routes/userauthrouter');
// const checkAuth = require('./middleware/check-auth');

var app = new express;

app.use(cors());
app.use(bodyparser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.listen(3000, function () {
    console.log('listening to port 3000')
});