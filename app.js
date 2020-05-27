const express = require("express");
const ejs = require("ejs");
const bodyParser =  require("body-parser");

const app = express();

app.set("view engine", "ejs")

app.listen(3000, function(){
  console.log("Server started on Port 3000")
});

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html")
})

app.get("/contact", function(request, response){
  response.send("This is the contact page")
})
