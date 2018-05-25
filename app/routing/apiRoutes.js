// set up 
var express = require("express");
var router = express.Router();


var friends = require("../data/friends.js")

router.get("/api/friends" , function(req, res){
    res.json(friends)
}) 

router.post("/api/friends" , function (req , res){
    var body = req.body
    console.log(body);
})

module.exports = router