//Sliding Window - Fixed

const arr = [-1,2,5,3,-6,-4,8]
const k = 4

//"maximum sum of k consecutive elements in an array" 

const n =  arr.length
let i = 0;
let j = k-1;
let sum = 0;
let max = 0;

//initial window sum
while(i<=j){
    sum += arr[i];
    i++
}
//save max as sum initially
max = sum
//now move window

for(let l = k;l<n; l++ ){
    sum = sum + arr[l] - arr[i++]
    max = Math.max(sum,max)
}
console.log(max)