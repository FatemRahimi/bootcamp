const fs= require("fs");

fs.writeFile("Message.txt", "hello world", (err)=>{
    if (err) throw err;
    console.log("saved")
})gir