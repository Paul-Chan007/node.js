var fs=require("fs");

//监视
fs.watch("test3.txt",function (eventType,filename) {
    console.log(eventType);
    if(filename){
        console.log(filename);
    }
})
//重命名
// setTimeout(function () {
//     fs.rename("test3.txt","test3.new.txt",function (err) {
//         if(err){
//             console.log("重命名失败");
//             return;
//         }
//         console.log("重命名成功");
//
//     })
// },2000)
//查看文件信息
fs.stat("test2.txt",function (err,stats) {
    console.log(stats);
})