const arr = [2,2,1]

function singleNumber(nums){
    const n = nums.length;
    let result = 0
    let unique = -1
    for(let i = 0; i < n; i++){
         result ^= nums[i]
    }
    return result
}

const uniqueNumbe = singleNumber(arr)

console.log(uniqueNumbe)

