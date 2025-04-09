// const arr = [10, 20, 30, 40, 50];
// const target = 60;

//Brute Force 
// const n = arr.length
// console.log(n)
// for(let i = 0; i < n; i++){
//     for( let j=i+1;j<n;j++){
//         if(arr[i]+arr[j] === target){
//             console.log([i,j])
//         }
//     }
// }

//using two pointers

const arr = [1,2,4,5,6,8,9,10,12];
const target = 9
const n = arr.length

let i = 0;
let j = n-1;

while(i<j){
    if(arr[i]+arr[j] === target){
        console.log([i,j])
        return
    }
    else if(arr[i]+arr[j] > target){
        j--;
    }
    else{
        i++
    }
}

//Note: You're trying to solve the Two Sum problem using the Two Pointers approach, 
//which is great for optimization, **but it only works correctly on a sorted array.