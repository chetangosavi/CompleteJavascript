// Challenge 4
// Write a function once that accepts a callback as input and returns a function. 
// When the returned function is called the first time, it should call the callback 
// and return that output. If it is called any additional times, instead of calling 
// the callback again it will simply return the output value from the first time it was called.

function addByX(x) {
    return function(y){
      console.log (x+y); }
  }
  
  // /*** Uncomment these to check your work! ***/
  const addByTwo = addByX(2);
  addByTwo(1); // => should return 3
  addByTwo(2); // => should return 4
  addByTwo(3); // => should return 5
  
  const addByThree = addByX(3);
  addByThree(1); // => should return 4
  addByThree(2); // => should return 5
  
  const addByFour = addByX(4);
  addByFour(4); // => should return 8
  addByFour(5); // => should return 9
  