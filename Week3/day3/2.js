// Nodemon-autorestart the server when we make changes in the code
const express=require("express")
const app=express();
app.get("/",(req,res)=>{
    res.send("Welcome to express js")
})
app.get("/about",(req,res)=>{

})
app.get("/read",(req,res)=>{
    const data= fs.readFileSync("./krmu.json","utf8")
})
app.listen(8080,()=>{
    console.log("Server started")
})