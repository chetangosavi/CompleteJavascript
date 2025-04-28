function peekUsingBinary(nums){

    const n = nums.length
    let left = 0
    let right = n -1

    while(left < right){
        let mid = Math.floor((right + left)/2)
        
        if(nums[mid] > nums[mid+1]){
            right = mid
        }
        else{
            left = mid + 1
        }
    }
    return left
}

const index = peekUsingBinary([4,5,6,8,2,1])
console.log(index)