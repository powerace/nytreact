var React = require("react");

var ReactDOM = require("react-dom");

var routes = require("./app/config/routes");

var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require('mongoose');
//var express = require("express");
//var exphbs = require("express-handlebars");

ReactDOM.render(routes, document.getElementById("app"));

// Require Article models
var Article = require("./models/Article.js");

//mongoose.connect('process.env.MONGODB_URI');
mongoose.connect('mongodb://localhost/articles');
var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

//Initialize Express
var app = express();
// use logger
app.use(logger("dev"));
//app setup
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static("public"));
// Set Handlebars as the default templating engine.
app.engine('.hbs', exphbs({
  // defaultLayout: 'main',
  // extname: '.hbs',
  // layoutsDir: './views/layouts',
  // partialsDir: './views/partials',
  //helper to debug handlebars
  // helpers: {debug: function(optionalValue) {
   
  // }
}));
app.set("view engine", "hbs");


