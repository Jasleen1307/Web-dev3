//Multer middleware 

const express=require("express");
const multer=require("multer");

const app=express();

const upload=multer({dest:"uploads/"});

app.get("/",(req,res)=>{
    res.send(`
        <html>
        <body>
             <h1>File Uploded</h1>
             <form action="/uploads" method="post" enctype="multipart/form-data">
                <input type="file" name="file"/>
                <input type="submit" value="Upload"/>
             </form>
        </body>
        </html>
    `)
});

app.post("/uploads",upload.single("file"),(req,res)=>{
    console.log(req.file);
    res.send("File uploaded successfully");
})

app.listen(8080,()=>{
    console.log("Server started");
});