var fs = require("fs");
var projectData={
    "name":"projectTest",
    "fileData":[
        {
            "name":"css",
            "type":"dir"
        },
        {
            "name":"js",
            "type":"dir"
        },
        {
            "name":"images",
            "type":"dir"
        },
        {
            "name":"index.html",
            "type":"file",
            "content":"<html>\n\t<head>\n\t\t<title>title</title>\n\t</head>\n\t<body>\n\t\t<h1>hello</h1>\n\t</body>\n</html>"
        }
    ]
}

if(projectData.name){
    fs.mkdirSync(projectData.name);
    var fileData=projectData.fileData;
    if(fileData && fileData.forEach){
        fileData.forEach(function (item) {
            item.path=projectData.name+"/"+item.name;
            item.content=item.content || "";
            switch (item.type) {
                case "dir":fs.mkdirSync(item.path); break;
                case "file":fs.writeFileSync(item.path,item.content); break;
                default: break;
            }
        })
    }
}
