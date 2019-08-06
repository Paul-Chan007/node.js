// 应用程序的启动入口文件
var express = require("express");
var swig = require("swig");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

//创建app应用 =>node.js的http.createServer();
var app=express();

//静态文件托管
app.use("/public",express.static(__dirname+"/public"));
app.use("/firestatic",express.static(__dirname+"/public/firestatic"));///
app.use("/environmentstatic",express.static(__dirname+"/public/environmentstatic"));///

//模块解析
app.engine("html",swig.renderFile);
app.set("views","./views");
app.set("view engine","html");
swig.setDefaults({cache:false});

//配置bodyParser中间件，用于解析前端传过来的参数
app.use(bodyParser.urlencoded({extended:true}))

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

