// Challenge 4
// Write a function once that accepts a callback as input and returns a function. 
// When the returned function is called the first time, it should call the callback 
// and return that output. If it is called any additional times, instead of calling 
// the callback again it will simply return the output value from the first time it was called.

function once(func) {
  let result; // To store the result of the first call
  let hasBeenCalled = false; // To track if the function has been called
  console.log(!hasBeenCalled)

  return function (...args) { // Use rest parameters to handle arguments
    if (!hasBeenCalled) {
      result = func(...args); // Call the function and store the result
      hasBeenCalled = true;  // Mark as called
    }
    return result; // Return the stored result
  };
}

function addByTwo(input) {
  return input + 2;
}

/*** Uncomment these to check your work! ***/
const onceFunc = once(addByTwo);
console.log(onceFunc(4));    // => should log 6
console.log(onceFunc(10));   // => should log 6
console.log(onceFunc(9001)); // => should log 6

  
  