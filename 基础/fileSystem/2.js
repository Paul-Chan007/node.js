var fs=require("fs");

var fileName="test2.txt";
//写入内容
fs.writeFile(fileName,"welcom to GZ",function (err) {
    if(err){
        console.log("写入文件识别");
    }
    console.log("写入文件成功");
})
//追加内容
fs.appendFile(fileName," Paul",function(err){
    if (err) throw err;
    console.log('数据已追加到文件');
})
//读取内容
fs.readFile(fileName,function (err,data) {
    if(err) {
        console.error(err);
    } else{
        console.log(data.toString());
    }
})
//删除文件
// setTimeout(function(){
//     fs.unlink(fileName,function(err){
//         if(err){
//             console.log("文件删除失败");
//         }
//         console.log("文件删除成功");
//     })
// },5000)
