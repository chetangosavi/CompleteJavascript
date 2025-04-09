const arr = [1,2,3,4,5,7,8]

//Brute force approach:
const missingNumber = ()=>{
    for(let i = 1; i <= arr.length+1; i++){
        if(!arr.includes(i)){
            return i;
        }
    }
}
console.log("Brute Force Appraoch: ",missingNumber()) 


//using Math

const sumOfAllNumbers = arr.reduce((acc,curr)=>{
  acc+=curr
  return acc
},0)

const n = arr.length + 1  //8

const expectedSum = (n * (n+1))/2  //---> (8*(8+1))/2     72/2 --> 36
console.log("Using Math",Math.abs(expectedSum-sumOfAllNumbers))





