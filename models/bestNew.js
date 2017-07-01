let mongoose = require("mongoose");
let Schema = mongoose.Schema;
var CommentSchema = require("./comment").model("Comment").schema;

let BestNewSchema = mongoose.Schema({
    type:   String,
    artist: String,
    album:  String,
    track:  String,
    genre:  String,
    imgArt: String,
    date:   String,
    comments: [CommentSchema]
});


BestNewSchema.statics.doesExist = function(scrapedData) {

  let addToDb = [];
  for(let scrape in scrapedData) {
    let lookUp = scrapedData[scrape];
    BestNew.find(lookUp)
    .then(function(result) {
        if(result.length < 1) {
          addToDb.push(scrapedData[scrape]);
        }
        if(scrapedData.length-1 === parseInt(scrape)) {
          BestNew.create(addToDb);
        }
      })
      .catch(function(e){
        console.log(e);
      });
  }
};

let BestNew = mongoose.model("BestNew", BestNewSchema);

module.exports = BestNew;
