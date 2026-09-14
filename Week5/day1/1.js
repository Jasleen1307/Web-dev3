const express=require("express");
const fs=require("fs");
const cors=require("cors");

const {studentRouter}=require("./routes/student.route");
const {trainerRouter}=require("./routes/trainer.route");
const {courseRouter}=require("./routes/course.route");

const app=express();
app.use(cors());

app.use("/student",studentRouter);
app.use("/trainer",trainerRouter);
app.use("/course",courseRouter);


app.get("/",(req,res)=>{

    res.send("Homepage");
});
app.listen(8080,()=>{
    console.log("Server Started");
})

