var dotenv = require('dotenv');
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var compression = require('compression');

/** Load environment variables from .env file **/
dotenv.load();

/** Mongoose **/
	// Start mLab Connection
	mongoose.connect(process.env.MONGODB, {
		useMongoClient: true
	});

	var db = mongoose.connection;

	// Validate connection is working.
	db.on('error', function() {
		console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
		process.exit(1);
	});

	// Schema for information about brothers
	var brotherSchema = mongoose.model('Brother', new mongoose.Schema({
		name: String,
		year: String,
		major: String,
		position: String,
		pclass: String,
		imgkey: String
	}),
	'brothers');

	// Schema for information about activities
	var activitySchema = mongoose.model('Activity', new mongoose.Schema({
		title: String,
		key: String,
		images: Array
	}),
	'activities');

	// General purpose promise generator
	// Promises to search the calsammy mLab db for all documents
	// matching the provided modelName
	function dataPromise(modelName) {
		return new Promise(function(resolve) {
			mongoose.model(modelName).find({}, function(err, docs) {
				resolve(docs);
			})
		});
	}

	// Object for conainting pages which require promised data from mLab
	var dataPromises = {
		"brothers": dataPromise('Brother'),
		"activities": dataPromise('Activity')
	};

/** Express **/
	// Start app
	var app = express();
	// Set port
	app.set('port', process.env.PORT || 3000);

	// Middleware
	app.use(compression());
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));

	// Staticly serve index and css
	app.use(express.static(__dirname));

	// All accessible pages use the basic index
	// Individual pages are designed and provided
	// using AngularJS routing
	app.get('/:page(brothers|activities|creed|rush)', function(req, res) {
		res.sendFile(__dirname + '/index.html');
	});

	// General purpose endpoint for getting
	// data from mLab database
	app.get('/:page(brothers|activities|creed|rush)-data', function(req, res) {
		if (req.params.page in dataPromises) {
			dataPromises[req.params.page].then(function(data) {
				res.send(data);
			});
		} else {
			res.end();
		}
	});


	// Production error handler
	if (app.get('env') === 'production') {
		app.use(function(err, req, res, next) {
			console.error(err.stack);
			res.sendStatus(err.status || 500);
		});
	}

	// Tell app to listen to provided port
	app.listen(app.get('port'), function() {
		console.log('Express server listening on port ' + app.get('port'));
	});
