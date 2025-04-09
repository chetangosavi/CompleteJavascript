//Move zeros to the end of array:

//brute force approach usign extra space

const arr = [1,0,2,0,3,0,0,5]

const n = arr.length
const modifiedArr = []
let i = 0
let k = 0

for(let j= 0; j < n; j++){
 modifiedArr.push(0)    
}

// while(i<n){
//     if(arr[i] != 0){
//         modifiedArr[k] = arr[i]
//         k++
//     }
    
//     i++
// }
// console.log(modifiedArr)


//Optimized :

while(i<n){
    if(arr[i] != 0){
        let temp = arr[i]
        arr[i] = arr[k]
        arr[k] = temp 
        k++
    }
    
    i++
}
console.log(arr)

