var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var path = require('path');
var cookieParser = require('cookie-parser');
var cors = require('cors');

const app = express();
const port = 3000;
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', express.static(__dirname + "/../public"));

var Customer = require('../routes/customer');

app.use('/customer', Customer);

const server = app.listen(port, () => {
	console.log('Express listenings on port', port);
});