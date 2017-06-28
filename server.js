const express = require("express"),
bodyParser = require("body-parser");
var path = require("path");
var app = express();

const PORT = process.env.PORT || 8080;

let mongoose = require("mongoose");
let db = require("./mongoConfig");
db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("We are connected");
  const scraped = require("./app/scrapePage");
});


app.use(express.static(path.join(__dirname, "node_modules")));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
