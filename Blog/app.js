// 应用程序的启动入口文件
var express = require("express");
var swig = require("swig");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var Cookies = require("cookies");
var User = require("./models/User");

//创建app应用 =>node.js的http.createServer();
var app=express();

//静态文件托管
app.use("/public",express.static(__dirname+"/public"));
app.use("/firestatic",express.static(__dirname+"/public/firestatic"));///
app.use("/environmentstatic",express.static(__dirname+"/public/environmentstatic"));///

//模块解析
//定义当前应用所使用的模板引擎 第一个参数：模板引擎的名称，同时也是模板文件的后缀，第二个参数表示用于解析处理模板内容的方法
app.engine("html",swig.renderFile);
//设置模板文件存放的目录，第一个参数必须是views，第二个参数是目录
app.set("views","./views");
//注册所使用的模板引擎，第一个参数必须是 view engine，第二个参数和app.engine这个方法中定义的模板引擎的名称（第一个参数）是一致的
app.set("view engine","html");
swig.setDefaults({cache:false});

//配置bodyParser中间件，用于解析前端传过来的参数
app.use(bodyParser.urlencoded({extended:true}))
//cookie
app.use(function(req,res,next){
    req.cookies = new Cookies(req,res);
    req.userInfo = {};
    //解析登陆用户的信息
    if(req.cookies.get("userInfo")){
        try{
            req.userInfo = JSON.parse(req.cookies.get("userInfo"));
            User.findById(req.userInfo._id).then(function(userInfo){
                req.userInfo.isAdmin = Boolean(userInfo.isAdmin);
                next();
            })
        }catch (e) {
            next();
        }
    }else{
        next();
    }
})

//http请求
app.use("/",require("./routers/main"));
app.use("/admin",require("./routers/admin"));
app.use("/api",require("./routers/api"));

app.use("/fire",require("./routers/fire"));///
app.use("/environment",require("./routers/environment"))///

mongoose.connect("mongodb://localhost:27017/blog",{useNewUrlParser:true},function (err) {
    if(err){
        console.log("数据库连接失败");
    }else{
        console.log("数据库连接成功");
        app.listen(8081);
    }
})

