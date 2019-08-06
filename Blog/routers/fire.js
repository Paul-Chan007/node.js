var express = require("express");
var router = express.Router();

router.get("/fire.html",function(req,res){
    res.render("fire");
})
module.exports=router;