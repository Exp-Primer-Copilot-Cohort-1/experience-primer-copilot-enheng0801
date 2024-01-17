// Create web server
// 2016-02-27
// -----------------------------------

var express = require('express');
var router = express.Router();

// MongoDB
var mongoose = require('mongoose');
var Comment = mongoose.model('Comment');

// GET /comments
router.get('/', function(req, res, next) {
  Comment.find(function(err, comments){
    if(err){ return next(err); }
    res.json(comments);
  });
});

// POST /comments
router.post('/', function(req, res, next) {
  var comment = new Comment(req.body);
  comment.save(function(err, comment){
    if(err){ return next(err); }
    res.json(comment);
  });
});

module.exports = router;