const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: String,
    password:String
});
const loginMethod = mongoose.model("logininfo", userSchema);
console.log(loginMethod)
module.exports = {loginMethod};