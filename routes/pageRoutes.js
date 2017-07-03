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

function musicCardData(req,res,next) {
  query.getData()
  .then(function(result){
    req.musicData = result;
    next();
  })
  .catch(function(error) {
    console.log(error);
    res.status(500)
    .send("A server side error has occured we are so sorry!! :(")
  })

}

module.exports = router;
