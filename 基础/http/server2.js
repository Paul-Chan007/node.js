var http=require("http");
var url=require("url");

var server=http.createServer();

server.listen(8091,"localhost");

server.on("error",function (err) {
    console.log(err);
})

server.on("listening",function (err) {
    console.log("listening...");
})

server.on("request",function(request,response){
    console.log(request.url);
    var urlStr=url.parse(request.url);
    switch (urlStr.pathname) {
        case '/':
            response.writeHead(200, {
                'Content-Type': 'text/html;charset=utf-8'
            });
            response.write("<h1>这是首页</h1>");
            response.end();
            break;
        case '/user':
            response.writeHead(200, {
                'Content-Type': 'text/html;charset=utf-8'
            });
            response.write("<h1>个人中心</h1>");
            response.end();
            break;
        default:
            response.writeHead(404, {
                'Content-Type': 'text/html;charset=utf-8'
            });
            response.write("<h1>页面被我吃掉了</h1>");
            response.end();
            break;
    }
})