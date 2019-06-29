"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var ClientControler = _interopRequireWildcard(require("./Controllers/ClientController.js"));

var port = 3005;

var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var cors = require('cors');

app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true
}));
app.use(bodyParser.json());
app.use(express["static"]('public'));
app.use(cors());
app.options('*', cors());
/* client ctrl */

app.use(ClientControler.router);
console.log('server start at http://localhost:' + port);
app.listen(port);