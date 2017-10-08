var express = require('express');
var path = require('path');
var compression = require('compression');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var mongoose = require('mongoose');
var dotenv = require('dotenv');
var fs = require('fs');
var Brother = require('./models/brother');
var brothers = {};

/** Load environment variables from .env file **/
dotenv.load();

/** Mongoose **/
mongoose.connect(process.env.MONGODB);
var db = mongoose.connection;
db.on('error', function() {
	console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
	process.exit(1);
});

var brotherSchema = mongoose.model('Brother', new mongoose.Schema({
	name: String,
	year: String,
	major: String,
	position: String,
	pclass: String,
	imgkey: String
}),
'brothers');

mongoose.model('Brother').find({}, function(err, docs) {
    fs.writeFile('brothers.json', JSON.stringify({db: docs}));
});

var app = express();
app.set('port', process.env.PORT || 3004);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use(express.static(path.join(__dirname, './')));

app.get('*', function(req, res) {
	res.sendFile(__dirname + '/index.html');
})

// Production error handler
if (app.get('env') === 'production') {
	app.use(function(err, req, res, next) {
		console.error(err.stack);
		res.sendStatus(err.status || 500);
	});
}

app.listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});
