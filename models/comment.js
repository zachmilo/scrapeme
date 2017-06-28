let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let CommentSchema = mongoose.Schema({
  // need to add a reference to comments to link to
    author:     String,
    title:      String,
    message:{   type:String, maxlength:300 },
    votes:{     up:Number, down:Number },
    datePosted: Date
});

  let Comment = mongoose.model( "Comment", CommentSchema);

  module.exports = Comment;
