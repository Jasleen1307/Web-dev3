const http=require("http");
const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.end("Home Page");
    }else if(req.url==="/add" && req.method==="POST"){
        // const data=req.body;
        //console.log(data);
        let str="";
        req.on("data",(chunk)=>{
            str+=chunk;
        });
        req.on("end",()=>{
            console.log(str);
            res.end("Created Page")
        });
    } else{
        res.end("Not found")
    }
})
server.listen(8080,()=>{
    console.log("server started")
}) 
// 3 ways hand shake in http- 1)request frontend send a signal 2)server aknowledge the signal 3)data is then send 
