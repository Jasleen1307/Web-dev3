//step1- npm init -y [setup nodejs app]
//step2- npm i express [installing express external module]
//step3- import express module for usecase

const express = require("express");
// Create application via express
const app=express();

//create routes
app.get("/",(req,res)=>{
    res.send("Welcome to express js")
})

app.get("/home",(req,res)=>{
    res.send("Home Page")
})

app.listen(8080,()=>{
    console.log("Server started") 
})   
// JSON- JS Oject Notation;stringify,parse-they are used to convert js object to json and vice versa 