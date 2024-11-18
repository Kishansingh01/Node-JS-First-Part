const crypto=require("node:crypto")

process.env.UV_THREADPOOL_SIZE= 2; // By default threadpool take four loop to run by we can change it 

crypto.pbkdf2("password","salt",500000,50,"sha512",(err,key)=>{
    console.log("1 -cryptopbkdf2 done")
});

crypto.pbkdf2("password","salt",500000,50,"sha512",(err,key)=>{
    console.log("2 -cryptopbkdf2 done")
});

crypto.pbkdf2("password","salt",500000,50,"sha512",(err,key)=>{
    console.log("3 -cryptopbkdf2 done")
});

crypto.pbkdf2("password","salt",500000,50,"sha512",(err,key)=>{
    console.log("4 -cryptopbkdf2 done")
});

crypto.pbkdf2("password","salt",500000,50,"sha512",(err,key)=>{
    console.log("5 -cryptopbkdf2 done")
});

// By default threadpool take four loop to run 