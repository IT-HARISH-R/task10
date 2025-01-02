const express = require('express');
const logger = require('./utlits/logger');
const erroePage = require('./utlits/errorPage');
const recipesRoute = require('./router/recipesRouter');
const bodyParser = require('body-parser');

const app = express();

app.use(express.json())

app.use(logger);

app.use("/resipe",recipesRoute)


app.use(erroePage);


module.exports = app;