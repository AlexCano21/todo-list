var express = require('express');
var router = express.Router();
var db = require("../models");
var helpers = require("../helpers/todos");

router.route('/')
    .get(helpers.getTodos)
    .post(helpers.createTodo)

router.route('/:todoId')
    .get(helpers.getTodo)
    .put(helpers.updateTodo)
    .delete(helpers.deleteTodo)

router.get('/root', function(req, res){
    res.send("You are in the root of the routes")
});

module.exports = router;