let express = require("express");
let query = require("../queries/mongoQueries");
let router = express.Router()

router.get("/",musicCardData,function(req,res){
  res.render("cardView",{
    musicArray:req.musicData,
    helpers:{
      howManyPerRow: function (numPerRow,context,options) {
        let numOfRows = Math.round((context.length +1) / numPerRow);
        let ret = "";
        let start = 0;
        let end = numPerRow;

        for (let card = 0; card <= numOfRows; card++) {
          ret = ret + "<div class='columns'>"
          for(start; start < end; start++) {
            if(start >= context.length) {
              return ret;
            }
            ret = ret + options.fn(context[start])
          }
          start = end;
          end = end + numPerRow;
          ret = ret + "</div>"
        }
      }
    }
  });
});

router.post("/addcomment",function(req,res){
  let author = req.body.author;
  let title = req.body.title;
  let message = req.body.message;
  let datePosted = req.body.datePosted;
  let albumId = req.body.albumId;

  query.addComment({
    author:author,
    title:title,
    message:message,
    datePosted:datePosted,
  },albumId)
  .then(function(){
    res.status(200)
    .send("OK");
  })
  .catch(function(e) {
    res.status(500)
    .send("A server side error has occured we are so sorry!! :(");
  })

});


function musicCardData(req,res,next) {
  query.getData()
  .then(function(result){
    req.musicData = result;
    next();
  })
  .catch(function(error) {
    console.log(error);
    res.status(500)
    .send("A server side error has occured we are so sorry!! :(");
  })

}

module.exports = router;
