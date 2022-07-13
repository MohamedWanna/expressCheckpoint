var express = require("express");
var app = express();
const path= require('path');
const port = 5000;



app.use(express.static("./Pages"));

app.use(function(req,res,next){
    
    const date= new Date();
    const day = date.getDay()
    const hour =date.getHours()
    if ((day==0||day==6)||(hour<9||hour>15)){
    return res.send("<h1> We are closed! </h1>");
    }
    next();
});



app.get('/',function(req,res){
    let file=path.resolve(__dirname,"./Pages/Home.html");
    res.sendFile(file);
});
app.get("/Services",(req,res)=>{
    let file=path.resolve(__dirname,"./Pages/Services.html");
    res.sendFile(file)
});

app.get("/Contact",(req,res)=>{
    let file=path.resolve(__dirname,"./Pages/Contact.html");
    res.sendFile(file)
});





app.listen(port,(err)=>
err ? 
console.log(err) :
console.log(`Server is running on port ${port}`))
