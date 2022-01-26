//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");

});

app.post("/", function(req, res) {
  console.log(req.body.firstName);
  res.write(req.body.firstName);
  res.write(req.body.lastName);
  res.write(req.body.email);
  res.send();
});




app.listen("3000", function() {
  console.log("Server running on port 3000!");
});
