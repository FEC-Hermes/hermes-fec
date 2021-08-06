const compression = require('compression');
const express = require('express');
const app = express();
const path = require('path');

const router = require('./routes.js');

app.use(express.json());
app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(compression());

app.use('/', router);


const PORT = 3000;

app.listen(PORT, () => console.log(`SERVER RUNNING ON PORT ${PORT}`));