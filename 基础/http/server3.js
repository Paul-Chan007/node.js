var http=require("http");
var url=require("url");
var fs=require("fs");
var querystring = require('querystring');

var server=http.createServer();
server.listen(8092,"localhost");
var htmlDir="html/";
server.on("request",function (req,res) {
    var urlStr=url.parse(req.url);
    switch (urlStr.pathname) {
        case '/':
            sendData(htmlDir+"index.html",req,res);
            break;
        case '/user':
            sendData(htmlDir+"user.html",req,res);
            break;
        case '/login':
            sendData(htmlDir+"login.html",req,res);
            break;
        case '/login/check':
            console.log(req.method);
           // console.log(querystring.parse(urlStr.query));
            if(req.method.toUpperCase() == "POST"){
                var str="";
                req.on("data",function(chunk){
                    str += chunk;
                })
                req.on("end",function(){
                    console.log(str);
                    console.log(querystring.parse(str));
                    res.writeHead("200",{'Content-Type': 'text/json'})
                    res.end('{"status":"success"}');
                })
            }
            break;
        default:
            sendData(htmlDir+"err.html",req,res);
            break;
    }
})
function sendData(file,req,res) {
    fs.readFile(file,function (err,data) {
        if(err){
            res.writeHead("404",{'Content-Type': 'text/html;charset=utf-8'})
            res.end("<h1>页面被我吃掉了</h1>");
        }else{
            res.writeHead("200",{'Content-Type': 'text/html;charset=utf-8'})
            res.end(data);
        }
    })
}