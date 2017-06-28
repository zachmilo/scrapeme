
let BestNew = require("../models/bestNew");
let Comment = require("../models/comment");

let query = {
  addScraped: function(scrapedData) {
    BestNew.create(scrapedData)
    .then(function(){
      console.log("you worked maybe");
    })
    .catch(function(e){
      console.log(e);
    });
  },
  // addComment: function(collection) {
  //
  // },
  // getNew: function(collection,filter) {
  //
  // }
}

module.exports = query;
