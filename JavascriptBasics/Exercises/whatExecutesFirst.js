function printHello(){
    console.log("hello 1000")
}

 setTimeout(printHello,1000)
console.log("me first 1000")          //excutes first and then printHello function 


//using 0ms

function printHello0(){
    console.log("hello 0")
}

 setTimeout(printHello0,0)
console.log("me first 0")

//Output
// me first 0
// hello 0
