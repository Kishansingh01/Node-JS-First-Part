// const fs= require("fs");
// const https= require("https");

// console.log("Hello World");

// var a=102328;
// var b=2096;

// https.get("https://dummyjson.com/products/1",(res)=>{
//     console.log("Fetched Data Auccessfully");
// });

// setTimeout(()=>{
//     console.log("setTimeout called after 5 seconds");
// },2000);

// fs.readFile("./file.txt", "utf8", (err,data)=>{
//     console.log("File Data :",data)
// });

// function multiplyFn(x,y){
//     const result=a*b;
//     return result;

// }

// var c=multiplyFn(a,b);
// console.log("Multiplication is:->",c)




// CHATGPT CODE
const fs = require("fs");
const https = require("https");

console.log("Hello World");

var a = 102328;
var b = 2096;

// Fetching data from an external API
https.get("https://dummyjson.com/products/1", (res) => {
    let data = '';
    
    // A data event listener to collect the chunks of data
    res.on('data', (chunk) => {
        data += chunk;
    });

    // End event is triggered when all the data has been received
    res.on('end', () => {
        console.log("Fetched Data Successfully: ", JSON.parse(data));
    });

}).on('error', (err) => {
    console.error("Error while fetching data: ", err);
});

// Timeout set for 2 seconds (corrected message)
setTimeout(() => {
    console.log("setTimeout called after 2 seconds");
}, 2000);

// Reading data from a file
fs.readFile("./file.txt", "utf8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log("File Data:", data);
});

// Function to multiply two numbers
function multiplyFn(x, y) {
    const result = x * y; // Use function parameters x and y
    return result;
}

// Using the multiply function
var c = multiplyFn(a, b);
console.log("Multiplication is:->", c);
