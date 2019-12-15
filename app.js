var express = require('express')
var path = require('path')
var app = express()

var courseData = require("./courses.json")


app.get('/', function(req,res){
  res.sendFile("/index.html", {root: path.join(__dirname, '/')});
})

app.get('/myroute', function(req,res){
  res.json(courseData)
})

app.get("/search", function(req, res){
  res.render("search");
})

app.listen(3000, function(){
  console.log("Running/Reloaded on port 3000...")
})
