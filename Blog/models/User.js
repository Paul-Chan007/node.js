var mongoose = require("mongoose");
var userSchema=require("../schemas/users");

model.exports = mongoose.model("User",userSchema);