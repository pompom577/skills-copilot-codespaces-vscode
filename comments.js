// Create web server
// Run server
// Create a path to handle requests
// Parse the request body
// Create a comment object
// Add the comment object to the comments array
// Return the comments array
// Create a path to handle requests
// Parse the request body
// Create a comment object
// Add the comment object to the comments array
// Return the comments array

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

var comments = [];

app.get('/comments', function(req, res) {
  res.json(comments);
});

app.post('/comments', function(req, res) {
  var comment = req.body;
  comments.push(comment);
  res.json(comments);
});

app.listen(3000);