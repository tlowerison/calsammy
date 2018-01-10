var dotenv = require("dotenv");
var express = require("express");
var bodyParser = require("body-parser");
var compression = require("compression");
var db = require("./db.js");

/** Load environment variables from .env file **/
dotenv.load();

var app = express();
app.set("port", process.env.PORT || 3000);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));

// All accessible pages use the basic index
// Individual pages are designed and provided
// using AngularJS routing
app.get("/:page(brothers|activities|creed|rush)", function(req, res) {
	res.sendFile(__dirname + "/public/index.html");
});

// General purpose endpoint for getting
// data from mLab database
app.get("/:page(home|brothers|activities|creed|rush)-data", function(req, res) {
	db(req.params.page)
	.then(function(data) {
		res.send(data);
	})
	.catch(function(err) {
		console.log(err);
		res.end();
	});
});

// Tell app to listen to provided port
app.listen(app.get("port"), function() {
	console.log("Express server listening on port " + app.get("port"));
});
