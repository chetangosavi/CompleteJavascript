// Challenge 5
// Write a function after that takes the number of times the callback needs to be called before being executed as
// the first parameter and the callback as the second parameter.

// CHALLENGE 4
function once(times,func) {
   
}

function addByTwo(x){
   return x+2;
}

// /*** Uncomment these to check your work! ***/
const onceFunc = once(ExeTimes,addByTwo);
console.log(onceFunc(4));  // => should log 6
console.log(onceFunc(10));  // => should log 6
console.log(onceFunc(9001));  // => should log 6
