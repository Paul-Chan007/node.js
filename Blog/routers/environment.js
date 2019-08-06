var express = require("express");
var router = express.Router();

router.get("/environment.html",function(req,res){
    res.render("environment");
})
module.exports=router;