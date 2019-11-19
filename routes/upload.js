const express = require('express');
const uploadController = require('../controllers/upload');

const Router = express.Router();

Router.post('/', uploadController.uploadUserImage);

module.exports = Router;
