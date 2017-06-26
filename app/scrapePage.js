var request = require('request');
const cheerio = require('cheerio')



request("http://pitchfork.com/best/", function (error, response, body) {
  if(error) throw error;
  const $ = cheerio.load(body);
  console.log(body);
  //scrape data
  //save data to db
  // display data

});
