const express = require('express');
const cookieParser = require('cookie-parser');
const auth = require('../middlewares/auth');
const cors = require('cors');

module.exports = (app) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors());
    app.use(cookieParser());
    app.use(auth);
};