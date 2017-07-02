
let BestNew = require("../models/bestNew");
let Comment = require("../models/comment");

let query = {
  addScraped: function(scrapedData) {
    try {
      BestNew.doesExist(scrapedData);
    }
    catch(error) {
      console.log(error);
    }
  },
  getData: function(queryparam,fn) {
    let setQuery = queryparam || "{}";
    BestNew.find(setQuery)
    .then(function() {
      fn("this is my result");
    })
    .catch(function() {
      console.log("what is happening here");
    });
  }
}

// BestNew.find(setQuery)
// .then(function(result) {
//   console.log("GIVE ME SOME FEEDBACK PLEASE"+result);
//   return new Promise.resolve(result);
// })
// .catch(function(error){
//   console.log("what the ruck is going "+error);
//   return new Promise.reject(error);
// });
// }

module.exports = query;
