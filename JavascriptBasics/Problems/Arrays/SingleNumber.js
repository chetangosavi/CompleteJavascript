const arr = [8,1,1,2,2,3,3,3,4,4]

function singleNumber(nums){
    const n = nums.length;
    let result = 0
    for(let i = 0; i < n; i++){
        // for(let j = i + 1; j< n ;j++){
        //     if(nums[i]!=nums[j]){
        //         return nums[i]
        //     }
        // }

        return result ^= nums[i]
    }
}

const uniqueNumbe = singleNumber(arr)
// console.log(5^3)
console.log(uniqueNumbe)

