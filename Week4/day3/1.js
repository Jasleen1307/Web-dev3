/* Middlewere-set of instructions which will be executed before the request is processed by the route handler 
set of institution to perform certain task ex(slw,hlw)
(req,res cylcle)
Middlewere is a function that sits between req-res cycle.It can access both req,res object*/

const express=require("express");
const fs=require("fs");


const app=express();

//create middlewere
const middleware=(req,res,next)=>{
    console.log(1);
    next();
    console.log(2);
};

//use
app.use(middleware); 


//Middlewere Chaining
const Middleware1=(req,res,next)=>{
    console.log("1");
    next();
    console.log("2");
};
const Middleware2=(req,res,next)=>{
    console.log("3");
    next();
    console.log("4");
};
app.use(Middleware1);
app.use(Middleware2);
  //Output: 1,3,homepage,4,2


/* Types of middleware:
1) Core MW/ Inbuilt mw ex: express.json(),router()
2) Custom mw/ Internal mw ex: Timelogger mw, routelogger mw, watchman mw
3) external mw/ Third party mw ex: Multer,CORS*/

//Custom Middlewere-
// 1) Timelogger mw- log the time of request

/*const Timelogger=(req,res,next)=>{
    const startTime=Date.now();
    next();
    const endTime=Date.now();

    console.log("Time taken by route is $(endTime-startTime)ms");  

};
app.use(TimeLogger); 

// 2) RouteLogger mw- log the route of request
const RouteLogger=(req,res,next)=>{
    const log= `Route: ${req.method} ${req.url} Time: ${new Date().toISOString()}`;
    fs.appendFileSync("./1.txt",log);
    next();
};

app.use(RouteLogger);

// 3) Watchman mw- log the request body
const Watchman=(req,res,next)=>{
    if(req.url)


app.get("/home",(req,res)=>{
    console.log("homepage");
    res.send("home page");
})

app.get("/about",(req,res)=>{
    console.log("about page");
    res.send("about page");
})

app.get("/data",(req,res)=>{

})*/
app.listen(8080,()=>{
    console.log("server started");
});  

//} 

//npx autocannon */