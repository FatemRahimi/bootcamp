const express = require("express");
const bodyParser = require("body-parser");
const app= express();

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
})
app.use(bodyParser.urlencoded({extended:true}))

app.post("/", function(req ,res){
    var  n1=Number(req.body.num1);
    var n2=Number(req.body.num2);

     const number = n1 + n2;
    res.send("the sum is" + number);

})

app.listen(3000, function(){
    console.log("i can listen you");
} )