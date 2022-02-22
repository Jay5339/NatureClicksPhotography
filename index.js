//jshint esversion:6
$(window).on('load', function(){
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut();
});

const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");


const port = 7000;
const app = express();
app.use(express.json());

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",function(req,res){
 res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){
    var firstName = req.body.fname;
    var lastName = req.body.lname;
    var Email = req.body.email;
    var feedback = req.body.feedback;
    var suggestions =req.body.suggestions;
    console.log("-----Client Details-----");
    console.log("Overall Feedback : "+feedback);
    console.log("First name : "+firstName);
    console.log("Last name : "+lastName);
    console.log("Email: " + Email);
    console.log("Suggestions: "+suggestions);
    res.sendFile(__dirname + "/index.html");
});


app.listen(port,function(req,res){
 console.log("server started on port " + port + ".");
 
});

