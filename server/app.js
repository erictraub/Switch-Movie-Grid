var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
module.exports = app;

var indexPath = path.join(__dirname, '/index.html');
var nodeModulesPath = path.join(__dirname, '../node_modules');
var browserPath = path.join(__dirname, '../browser');


app.use(morgan('dev'));
app.use(express.static(nodeModulesPath));
app.use(express.static(browserPath));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use('/api', require('./routes/api'));

app.get('/*', function (req, res) {
   res.sendFile(indexPath);
});

app.use(function (err, req, res, next) {
    console.error(err);
    res.status(500).send(err.message);
});

app.listen(3000, function() {
	console.log('listening on port 3000...');
});