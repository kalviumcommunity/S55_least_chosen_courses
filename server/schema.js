const mongoose = require("mongoose");

const testSchema = mongoose.Schema({
    name: String,
    duration: String,
    ratings: Number,
    imageLink: String
});
const Model = mongoose.model("LeastCourses", testSchema);
module.exports = {Model};