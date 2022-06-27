const express = require('express');
const logger = require('morgan');
const MainRouter = require('../routes');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', MainRouter);

module.exports = app;