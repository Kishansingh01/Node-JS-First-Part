const crypto=require("node:crypto");
console.log("Hello world");

var a=22;
var b=2323;

// Sync function will block the main thread so donot use it.
crypto.pbkdf2Sync("password","salt",5000000, 50,"sha512");
console.log("First key is generated");  

// Password Base Key Derivative Function
// Async function
crypto.pbkdf2("password","salt", 500000,50,"sha512",(err,key)=>{
    console.log("key is generated");
});

function multiplyFn(x,y){
    const result=a*b;
    return result;
}
var c=multiplyFn(a,b);
console.log("Multiplication result is:",c);