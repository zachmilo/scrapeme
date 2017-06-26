let mongoose = require("mongoose");
let db = require("../mongoConfig");

db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("We are connected");
});

let CommentSchema = mongoose.Schema({
  // need to add a reference to comments to link to
    author:     String,
    title:      String,
    message:{   type:String, maxlength:300 },
    votes:{     up:Number, down:Number },
    datePosted: Date
});

let BestNewSchema = mongoose.Schema({
    type:   String,
    artist: String,
    album:  String,
    track:  String,
    genre:  String,
    imgArt: String,
    date:   Date,
    track:  String,
    comments:[CommentSchema]
});

let Comment = mongoose.model( "Comment", CommentSchema);
let BestNew = mongoose.model("BestNew", BestNewSchema);


module.exports = {
   Comment,
   BestNew
}
