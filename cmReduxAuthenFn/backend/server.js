const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const formidable = require("formidable");
const fs = require("fs-extra");

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get("/", (req, res)=>{
    res.end("I am ironlek")
})

app.get("/login", (req, res)=>{
    res.json({result: "ok", query:req.query})
})

app.post("/register", (req, res)=>{
    res.json({result: "ok", body: req.body})
})

app.get("/travel/:from-:to", (req, res)=>{
    res.json({result: "ok", query:req.params})
})

app.post("/uploads", (req, res)=>{
    let form = new formidable.IncomingForm()
    form.parse(req, (error, fields, files)=>{
        var newname = Date.now();            
        var oldpath = files.userfile.path;
        var newpath = __dirname + "/upload/" + newname.toString() + "." + files.userfile.name.split('.').pop();
        
        fs.move(oldpath, newpath, function (err) {                              
          res.json({result: "Upload Successfully", account: fields});

        }); 
    })
})


app.listen(3000, ()=>{
    console.log("Running.")
})