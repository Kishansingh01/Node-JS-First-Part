// const http=require("node:http");

// const server=http.createServer(
//     function(req,res){
//         res.end("Hello World11");});
// server.listen(1100);


const http=require("node:http");
const server= http.createServer(function(req,res){
    if(req.url === "/getSecretData"){
        res.end("There is no secret data");
    }
    if(req.url === "/getParents"){
        res.end("Father and mother I LOVE YOU");
    }
    
    res.end("hello world");
});
server.listen(7777);

// But it is the longer process to connect with database thats why we use ExpressJS
