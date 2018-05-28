var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });



var port = process.env.PORT || 3000;

var htmlRoutes = require("./app/routing/htmlRoutes.js")

app.use(htmlRoutes)

var apiRoutes = require("./app/routing/apiRoutes.js")

app.use(apiRoutes)

app.listen(port)


//cross origin resource sharing?