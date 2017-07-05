let request = require("request");
let query = require("../queries/mongoQueries");
let BestNew = require("../models/bestNew").BestNew;
const cheerio = require("cheerio");


request("http://pitchfork.com/best/", function (error, response, body) {

  if(error) throw error;
  const $ = cheerio.load(body);

  newMusic($);
  newAlbums($);
  newTrack($);
  newReissue($);
});


/*
 * this code needs to be more dynamic please re-write this
 * we are pretty much doing the same thing. WE CAN DO BETTER
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
  let newMusicArray = [];

  $("#best-new-albums .album-small").each(function(i, elem) {
    let newMusic = {
      type: "album",
      artist: $(this).find(".artist-list").text(),
      album: $(this).find(".title").text(),
      track: "",
      genre: $(this).find(".genre-list.before.inline").text(),
      imgArt: $(this).find("img").attr("src"),
      date: $(this).find(".date").text()
  };
    newMusicArray.push(newMusic);
  });
  query.addScraped(newMusicArray);
}

function newTrack($) {
  let newMusicArray = [];
  $("#best-new-tracks .track-small").each(function(i, elem) {

      let newMusic = {
        type: "track",
        artist: $(this).find(".artist-list").text(),
        album: "",
        track: $(this).find(".title").text(),
        genre: $(this).find(".genre-list.before.inline").text(),
        imgArt: $(this).find("img").attr("src"),
        date: $(this).find(".date").text()
    };
      newMusicArray.push(newMusic);
  });
  query.addScraped(newMusicArray);
}
function newReissue($) {
  let newMusicArray = [];
  $("#best-new-reissues .album-small").each(function(i, elem) {
      let newMusic = {
        type: "track",
        artist: $(this).find(".artist-list").text(),
        album: $(this).find(".title").text(),
        track: "",
        genre: $(this).find(".genre-list.before.inline").text(),
        imgArt: $(this).find("img").attr("src"),
        date: $(this).find(".date").text()
    };
      newMusicArray.push(newMusic);
  });
  query.addScraped(newMusicArray);
}
