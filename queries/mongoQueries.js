
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
  getData: function(queryparam = "{}") {
    return BestNew.find(queryparam).sort({date:-1})
  },
  addComment: function(addComment,albumId) {
    return BestNew.update({ _id:albumId}, { "$push": { "comments": addComment } });
  }
}

module.exports = query;
