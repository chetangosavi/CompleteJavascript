const arr = [1,2,3,4,5]

function reverseArray(nums){
    const n = nums.length;

    let left = 0;
    let right = n - 1;

    while(left < right){
        let temp = nums[right];
        nums[right] = nums[left];
        nums[left] = temp;

        left++
        right--
    }

    return nums;
}

console.log(reverseArray(arr))