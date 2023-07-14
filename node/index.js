const fs= require("fs");

fs.writeFile("Message.txt", "hello world", (err)=>{
    if (err) throw err;
    console.log("saved")
})


fs.readFile("./Message.txt","utf-8",  (err,data)=>{
    if (err) throw err;
    console.log(data)
})
