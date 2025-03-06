var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    age: Number
});

module.exports = mongoose.model("User", UserSchema);