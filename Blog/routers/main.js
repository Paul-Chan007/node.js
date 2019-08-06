var express = require("express");
var router = express.Router();

router.get("/",function(req,res){
    // res.send("<h1>欢迎来到我的博客</h1>");
    // console.log(req);
    res.render("main/index");
})
module.exports=router;