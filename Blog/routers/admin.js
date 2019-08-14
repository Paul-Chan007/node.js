var express = require("express");
var router = express.Router();
var User = require("../models/User");

router.use(function(req,res,next){
    if(!req.userInfo.isAdmin){
        res.send("对不起，只有管理员才可以进入后台管理");
        return;
    }
    next();
})

//后台首页
router.get("/",function(req,res){
    res.render("admin/index",{ userInfo:req.userInfo });
})

//用户管理
router.get("/user",function(req,res){
    User.find().then(function (users) {
        // console.log(users);
        res.render("admin/user_index",{
            userInfo:req.userInfo,
            users:users
        });
    });

})

module.exports=router;