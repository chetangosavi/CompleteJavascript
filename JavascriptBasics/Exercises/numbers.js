let arr = [1,2,3]
console.log("Using Spread operator", Math.max(...arr))

//using reduce function

const sum = arr.reduce((accumulator,currentvalue)=>accumulator+currentvalue,0);
console.log("Sum: ",sum)


const max = arr.reduce((accumulator,currentvalue)=>Math.max(accumulator,currentvalue));
console.log("Sum: ",max)

const min = arr.reduce((acc,curr)=>Math.min(acc,curr));
console.log("Min value: ",min);


console.log("add 1+3",add);
