const arr = [1,2,3,4,5]
const k = 2
function rotate(nums){
    const n = nums.length;
    const tempArr = []
    for(let i = 0; i < n; i++){
        const target = (i + k) % n
        tempArr[target] = nums[i];
    }

    return tempArr;
}

console.log(rotate(arr))