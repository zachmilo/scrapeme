const express = require("express"),
bodyParser = require("body-parser"),
datbaseModels = require("./models/bestNew"),
scraped = require("./app/scrapePage"),
request = require('request'),
cheerio = require('cheerio');





var path = require("path");
var app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "node_modules")));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
