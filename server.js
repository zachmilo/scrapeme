const express = require("express"),
bodyParser = require("body-parser"),
datbaseModels = require("./models"),
request = require('request'),
cheerio = require('cheerio');





var path = require("path");
var app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "node_modules")));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

request("http://pitchfork.com/best/", function (error, response, body) {

  if(error) throw error;
  const $ = cheerio.load(body);


  // let bestNewMusic = $(".heroes");
  // let newAlbums = $("#best-new-albums");
  // let newTracks = $("#best-new-tracks");
  // let newReissues = $("#best-new-reissues");
  newMusic($);
  //scrape data
  //save data to db
  // display data
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });


/*
 * This will scrape the data for the best new music
 *
 */
function newMusic($) {
  $(".hero").each(function(i, elem) {
          console.log($(this).find(".title").text());
          console.log($(this).find(".genre-list.before.inline").text());
          console.log($(this).find(".date").text());
          console.log($(this).find("img").attr("src"));
  });
}

function newAlbums($) {
  $("#best-new-albums").each(function(i, elem) {
          console.log($(this).find(".title").text());
          console.log($(this).find(".genre-list.before.inline").text());
          console.log($(this).find(".date").text());
  });
}
