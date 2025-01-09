function printHello(){
    console.log("Hello World");
}

setTimeout(printHello,0);    //---------->function goes into callback queue and executed on completion of global context

function addition(a,b){
    return a+b;
}

const result = addition(5,4)
console.log(result)
console.log("Thats the end of program")

//output
// 9
// thats the end of program
// hello world