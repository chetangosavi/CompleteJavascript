const arr = [1,2,3,4,5]

function print(nums){
    const n = nums.length
    const startIndex = 3;
    let ar = []
    for(let i = 0; i < n; i++){
        let index = (startIndex + i) % n
        ar.push(nums[index])
    }
    return ar
}

console.log(print(arr))