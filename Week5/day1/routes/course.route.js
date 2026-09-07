const express=require("express");
const fs=require("fs");

const courseRouter=express.Router();
courseRouter.get("/",(req,res)=>{
    const data=JSON.parse(fs.readFileSync("./Krmu.json","utf-8"));
    res.send(data.course);
})
module.exports= {courseRouter};