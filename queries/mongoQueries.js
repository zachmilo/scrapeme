
let BestNew = require("../models/bestNew");
let Comment = require("../models/comment");

let query = {
  addScraped: function(scrapedData) {
    let newAdded = BestNew.doesExist(scrapedData);
    BestNew.create(newAdded)
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
