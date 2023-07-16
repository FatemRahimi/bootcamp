const express = require("express");
const bodyParser = require("body-parser");
const app= express();

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req ,res){
    res.send("thank you for sending");
})

app.listen(3000, function(){
    console.log("i can listen you");
} )