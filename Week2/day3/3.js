const http=require("http");
const fs=require("fs");
const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.end("Home page")
    } else if(req.url=="/about" && req.method=="POST"){
        res.end("About Page")
    } else if(req.url=="/data" && req.method=="GET"){
        const data=fs.readFileSync("./1.json","utf-8");
        res.end(data)
    } else {
        res.end("PAGE NOT FOUND")
    }
})
server.listen(8080,()=>{
    console.log("Server started") 
});  

// Web browser only use get method to send request to server.that's why we use postmen to send request to server by other methods like post,put,patch,delete etc. and to test the api's. we can also use postman to send get request to server.
