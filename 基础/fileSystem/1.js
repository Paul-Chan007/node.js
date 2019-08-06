var fs=require("fs");
//打开、读取并关闭文件
fs.open('test.txt','r',(err, fd)=>{
    if(err) {
        console.error(err);
        return;
    }
    // console.log(fd);
    var buf =Buffer.alloc(10);
    fs.read(fd,buf,0,10,null,function(err, bytesRead, buffer){
        if(err){
            console.log(err);
            return;
        }
        // console.log(bytesRead);
        console.log(buffer.toString());
        fs.close(fd,function () {
            console.log("读取后关闭文件");
        })
    })
})
//打开、往文件写入并关闭文件
fs.open("test.txt","r+",function(err, fd){
    if(err) {
        console.error(err);
        return;
    }else {
        var buf2=new Buffer.from("123");
        fs.write(fd,buf2,0,3,4,function(err, bytesRead, buffer){
            console.log(bytesRead);
            console.log(buffer.toString());
        })
        fs.close(fd,function () {
            console.log("写入后关闭文件");
        })
    }
})

