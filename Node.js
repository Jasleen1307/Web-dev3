/*const os = require('os');
console.log(os.freemem());
console.log(typeof os.type());
console.log(os.platform());
console.log(os.release());
console.log(os.version());
console.log(os.cpus());

const path=require('path');
console.log(path.resolve());
console.log(path.resolve()+path.join('/photos/images/1.jpg'));

const dns=require('dns'); // Domain Name System 
console.log(dns.getServers());
// these are called core module beacuse they are pre installed with node.js and we can use them without installing any package.  
// 4) CRYPTO- used for hashing and encrypting data.
const crypto=require("crypto");

const key="hello";

const hashData=crypto.createHash("sha256")
console.log(hashData); 

const data=hashData.update(key);
console.log(data);

const ans=data.digest("hex");
console.log(ans);*/
// RANDOM INT- to generate random integers.
/*const crypto=require("crypto");
const ans1=crypto.randomInt(1,7);
console.log(ans1);


// Random uuid- to generate unique id for user or any other purpose.
const ans2=crypto.randomUUID();
console.log(ans2);*/

// 5) fs- file system module- used to read, write,update,delete files in node.js 
//READ FILE- to read a file we have two methods- 1) readFileSync() 2) readFile()
const fs=require("fs"); 
/*fs.readFile("./1.txt","utf-8",(err,data)=>{
    if(err){
        console.log("Something went wrong")
    }
    else{
        console.log(data);
    }
})
const data=fs.readFileSync("./1.txt","utf-8");
console.log(data); */
// WRITE FILE- to write a file we have two methods- 1) writeFileSync() 2) writeFile()
/*fs.writeFile("./1.txt","Welcome to krmu",(err)=>{
    if(err){
        console.log("Something went wrong")
    } else{
        console.log("File written successfully")
    }
})

fs.writeFileSync("./1.txt","All is well");
console.log("File written successfully");*/

//update file- to update a file we have two methods- 1) appendFileSync() 2) appendFile()
fs.appendFile("./1.txt"," kaise ho app",(err)=>{
    if(err){
        console.log("Something went wrong")
    } else{
        console.log("File updated successfully")
    }
});   
fs.appendFileSync("./1.txt"," sab theek hai");  
console.log("File updated successfully");

/*fs.rename("./1.txt","./2.txt",(err)=>{
    if(err){
        console.log("Something went wrong")
    } else{
        console.log("File renamed successfully")
    }
});*/ 