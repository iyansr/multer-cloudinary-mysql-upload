const express = require('express');
const upload = require('./upload');

const Router = express.Router();

Router.use('/upload', upload);

module.exports = Router;
