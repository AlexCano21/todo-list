var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect("mongodb+srv://alexcano:veryepic@cluster0-bc8cs.mongodb.net/test?retryWrites=true")

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");