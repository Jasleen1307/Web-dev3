//step1 import mongose
const mongoose=require("mongoose");
require("dotenv").config(); 

//step2 build connection with db
const connection=mongoose.connect(process.env.url); 

connection.then(()=>console.log("Connected to DB")).catch((err)=>console.log("Error in DB connection",err));
//step3 build schema/structure
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
    password:String,
},{
    versionKey:false
});

//step4 create usermodel for creating document
const userModel=mongoose.model("user",userSchema);

//step5 export module
module.exports={connection,userModel}; 