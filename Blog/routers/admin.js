var express = require("express");
var router = express.Router();

router.get("/user",function(req,res){
    res.send("ADMIN-user");
})
// router.post("/user",function(req,res){
//     res.send("post-user");
// })
module.exports=router;