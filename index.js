require('dotenv').config();
const express = require('express');
const router = require('./routes/index');

// Init app
const app = express();

// Public Folder
app.use(express.static('./public'));

app.use('/', router);

const port = 9100;

app.listen(port, () => console.log(`Server started on port ${port}`));
