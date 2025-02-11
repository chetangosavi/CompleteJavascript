// Challenge 2
// Create a function createFunctionPrinter that accepts one input and returns a function. 
// When that created function is called, it should print out the input that was used when 
// the function was created.


function createFunctionPrinter(input) {
    function printFnc(){
        console.log(input)
    }
    return printFnc;
}

/*** Uncomment these to check your work! ***/
const printSample = createFunctionPrinter('sample');
printSample(); // => should console.log('sample');
const printHello = createFunctionPrinter('hello');
printHello(); // => should console.log('hello');
