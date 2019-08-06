var fs=require("fs");

//创建文件夹
// fs.mkdir("./source",function(err){
//     console.log(err);
// })

//删除文件夹
// fs.rmdir("./source",function (err) {
//     console.log(err);
// })

//获取文件夹信息
fs.readdir("../fileSystem",function (err,fileList) {
    console.log(fileList);
    fileList.forEach((item)=>{
        console.log(item);
    })

})