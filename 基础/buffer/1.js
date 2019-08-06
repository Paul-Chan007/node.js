// var bf=new Buffer(10);
// console.log(bf);
//
var bf2=new Buffer([12,52,2,4]);
console.log(bf2);
//
// var bf3 = new Buffer("www.w3cschool.cn", "utf-8");
// console.log(bf3);

var str="welcome";
var bf4=new Buffer(5);
bf4.write(str,1,2);
console.log(bf4);
console.log(bf4.toString());