var http=require("http");
var server=http.createServer();
server.listen(8090,"localhost");
server.on("error",function (err) {
    console.log(err);
})
server.on("listening",function (err) {
    console.log("listening...");
})
server.on("request",function(request,response){
    // console.log(request);
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    // response.write("hello");
    response.write("<h1>hello</h1>");
    response.end();
})