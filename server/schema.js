const mongoose = require("mongoose");

const testSchema = mongoose.Schema({
    name: String,
    duration: String,
    ratings: String,
    imageLink: String,
    created_by: String
});
const UserModel = mongoose.model("leastchosencourses-collection", testSchema);
module.exports = {UserModel};