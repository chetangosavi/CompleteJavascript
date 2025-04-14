//works if only one missing number and if array is sorted O(n)

const arr = [1,2,3,4,5,7,8]

function findMissing(nums){
    const n = arr.length;

    for(let i = 0; i<n;i++){
        if(arr[i] != i+1){
            return i+1
        }
    }
}

console.log(findMissing(arr))