const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const app = express();
const router = require('./routers');

app.use(cors());
app.use(helmet());

app.use(router);

module.exports = app;
