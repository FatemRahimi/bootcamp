const express = require("express");
const app = express();
const https= requier("https");

app.get("/", function(req,res) {
    res.send( "everything is ok");
})







app.listen(3000, function (){
    console.log ("port is working");
})