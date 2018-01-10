var mongoose = require('mongoose');
var dotenv = require('dotenv');

/** Load environment variables from .env file **/
dotenv.load();

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
var brotherSchema = mongoose.model('brothers', new mongoose.Schema({
	name: String,
	year: String,
	major: String,
	position: String,
	pclass: String,
	imgkey: String
}),
'brothers');

// Schema for information about activities
var activitySchema = mongoose.model('activities', new mongoose.Schema({
	title: String,
	key: String,
	images: Array
}),
'activities');

var homeSchema = mongoose.model('home', new mongoose.Schema({
	images: Array
}),
'home');

var rushSchema = mongoose.model('rush', new mongoose.Schema({
	images: Array,
	panels: Array
}),
'rush')

var dataCache = {};

// General purpose promise generator
// Promises to search the calsammy mLab db for all documents
// matching the provided modelName
module.exports = function(modelName) {
	return new Promise(function(resolve, reject) {
		if (dataCache[modelName] != undefined) resolve(dataCache[modelName]);
		else {
			try {
				mongoose.model(modelName).find({}, function(err, docs) {
					dataCache[modelName] = docs;
					resolve(docs);
				})
			} catch(err) {
				reject(err);
			}
		}
	});
}
