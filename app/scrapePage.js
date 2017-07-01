let request = require("request");
let query = require("../queries/mongoQueries")
let BestNew = require("../models/bestNew").BestNew;
const cheerio = require("cheerio");


request("http://pitchfork.com/best/", function (error, response, body) {

  if(error) throw error;
  const $ = cheerio.load(body);

  newMusic($);
  //newAlbums($);
  //newTrack($);
  //newReissue($);
  //scrape data
  //save data to db
  // display data
});


/*
 * this code needs to be more dynamic please re-write this
 */
function newMusic($) {

  let newMusicArray = [];
  if($(".hero").length <1) {
    return;
  }
  $(".hero").each(function(i, elem) {
      let type = $(this).find(".group").text().split(" ")[2]; // removes the best new to get type
      let track = "";
      let album = $(this).find(".title").text();

      if(type === "track" ) {
        album = "";
        track = $(this).find(".title").text();
      }
      let newMusic = {
        type: type,
        artist: $(this).find(".artist-list").text(),
        album: album,
        track: track,
        genre: $(this).find(".genre-list.before.inline").text(),
        imgArt: $(this).find("img").attr("src"),
        date: $(this).find(".date").text()
    };
      newMusicArray.push(newMusic);
  });
  query.addScraped(newMusicArray);
}

function newAlbums($) {
  $("#best-new-albums .album-small").each(function(i, elem) {
    console.log($(this).find(".artist-list").text());
    console.log($(this).find(".title").text());
    console.log($(this).find(".genre-list.before.inline").text());
    console.log($(this).find("img").attr("src"));
  });
}

function newTrack($) {
  $("#best-new-tracks .track-small").each(function(i, elem) {
    console.log($(this).find(".artist-list").text());
    console.log($(this).find(".title").text());
    console.log($(this).find(".genre-list.before.inline").text());
    console.log($(this).find("img").attr("src"));
  });
}
function newReissue($) {
  $("#best-new-reissues .album-small").each(function(i, elem) {
    console.log($(this).find(".artist-list").text());
    console.log($(this).find(".title").text());
    console.log($(this).find(".genre-list.before.inline").text());
    console.log($(this).find("img").attr("src"));
  });
}
