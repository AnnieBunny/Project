const express = require('express');

const cors = require('cors');

const cookieParser = require('cookie-parser');


const auth = require('../middlewares/auth');
const { json } = require('express');




module.exports = function (app) {

    // app.engine('hbs', hbs({
    //     extname: 'hbs',
    // }));

    // app.set('view engine', 'hbs');

    // app.use('/static', express.static('static'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors());
    app.use(cookieParser());
    app.use(auth);

};