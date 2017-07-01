
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

}

module.exports = query;
