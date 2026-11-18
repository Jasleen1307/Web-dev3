const express=require("express");
const http=require("http");
const {Server}=require("socket.io");

const app=express();
const httpserver=http.createServer(app);
const io=new Server(httpserver);

io.on("connection",(socket)=>{
    console.log("Connected Established");
    socket.emit("chat","hello from server side");
    socket.on("msg",(cb)=>{
        console.log(cb);
    });
});
httpserver.listen(8080,()=>{
    console.log("Server Started");
});