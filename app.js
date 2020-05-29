const express = require("express");
const ejs = require("ejs");
const bodyParser =  require("body-parser");


const app = express();

app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));



app.listen(3000, function(){
  console.log("Server started on Port 3000")
});


// app.get('/',(req, res) => res.redirect('/spa1');


app.get('/', function(req, res) {
    res.render('index');
});

app.get('/index.ejs', function(req, res) {
    res.render('index');
});

app.get('/crepes.ejs', function(req, res) {
    res.render('crepes');
});

app.get('/bebidas.ejs', function(req, res) {
    res.render('bebidas');
});

app.get('/contacto.ejs', function(req, res) {
    res.render('contacto');
});

app.get('/promocion.ejs', function(req, res) {
    res.render('promocion');
});

app.get('/pizzaSimple.ejs', function(req, res) {
    res.render('pizzaSimple');
});

app.get('/pizzaQueso.ejs', function(req, res) {
    res.render('pizzaQueso');
});

app.get('/pizzaCarne.ejs', function(req, res) {
    res.render('pizzaCarne');
});

app.get('/pizzaPersonalizada.ejs', function(req, res) {
    res.render('pizzaPersonalizada');
});

app.get('/pizzaPescado.ejs', function(req, res) {
    res.render('pizzaPescado');
});

app.get('/pizzaVegetal.ejs', function(req, res) {
    res.render('pizzaVegetal');
});
