//Setting up a Node Server
const http=require('http');
const url=require('url');
http.createServer((req,res)=>{
    const pathname='.'+url.parse(req.url).pathname; //getting the pathname
    if(pathname==="./"){
        res.write("This is Node Server");
        res.end();
    }
    if(pathname==='./nodeserver'){
        res.write("This is node server with path nodeServer");
        res.end();
    }
}).listen(3000,()=>console.log("Node Server Started at port number 3000"))

//Express Server
const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send("This is Express server")
})
app.get('/expressserver',(req,res)=>{
    res.send("This is Express Server with path expressServer")
})
app.listen(4000,()=>console.log("Express Server Started at port 4000"))