let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let Comment = require("./comment");

let BestNewSchema = mongoose.Schema({
    type:   String,
    artist: String,
    album:  String,
    track:  String,
    genre:  String,
    imgArt: String,
    date:   Date
});

let BestNew = mongoose.model("BestNew", BestNewSchema);

module.exports = BestNew;
