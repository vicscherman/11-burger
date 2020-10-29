var express = require('express');

// var orm = require("./config/orm.js")
// orm.selectAll("burgers", function(result){console.log( ` burger result: `, result);});
// orm.insertOne("burgers", "burger_name", "yumm",  function(result){console.log(result)})
//orm.updateOne("burgers",  "burger_name: cool ", "yumm", function (result ){console.log(result)})//Ask Fil
//orm.delete("burgers", "", function (result ){console.log(result)})
var PORT = process.env.PORT || 3000;

var app= express();

app.use(express.static("public"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout:"main"}));
app.set("view engine", "handlebars");

var routes =require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("server listening on http://localhost:" + PORT) 
});