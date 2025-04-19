const arr = [1, 8, 7, 56, 90]

// const sorted = arr.sort()
// console.log(sorted[sorted.length-1])

function largetsNumber(nums){

    const n = nums.length
    let max = Number.MIN_VALUE;
    for(let i = 0; i < n; i++){
        if(nums[i]>max){
            max = nums[i];
        }
    }
    return max;
}

console.log(largetsNumber(arr))
