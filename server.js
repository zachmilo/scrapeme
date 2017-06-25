const express = require("express"),
bodyParser = require("body-parser"),
datbaseModels = require("./models");


var path = require("path");
var app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "node_modules")));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// scrape code should go here this will scrape pitch fork
// middleware to formate the results then display this crap on the page

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
