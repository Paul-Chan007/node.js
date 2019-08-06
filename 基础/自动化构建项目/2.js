var fs=require("fs");
var filedir="projectTest/source";
fs.watch(filedir,function (ev,files) {
    fs.readdir(filedir,function (err,dataList) {
        console.log(dataList);
        var arr=[];
        dataList.forEach(function (f) {
            if(f){
                var info=fs.statSync(filedir + '/' + f);
                // console.log(info);
                if(info.mode==33206){
                    arr.push(filedir+ '/'+f);
                }
            }
        });
        console.log(arr);
        // // 读取文件中的内容
        var content="";
        arr.forEach(function (f) {
            var c=fs.readFileSync(f);
            content += c.toString()+"\n";
        })
        console.log(content);
        fs.writeFileSync("projectTest/js/index.js",content);
    })
})