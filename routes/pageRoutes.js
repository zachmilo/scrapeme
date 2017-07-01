let router = require("express");


router.get("/",function(req,res){
  res.sendFile("./index");

});
