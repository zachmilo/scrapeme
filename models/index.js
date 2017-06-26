let mongoose = require("mongoose");
let db = require("../mongoConfig");

db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('openUri', function() {
  console.log("We are connected");
});
