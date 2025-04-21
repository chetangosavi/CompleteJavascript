const arr = [1,2,3,4,5,6,7,8,9]


function binarySearch(nums,traget){

    const n  = nums.length
    let left = 0;
    let right = n - 1;

    while (left <= right){
        let mid = Math.floor(left + (right - left) / 2)

        if(nums[mid] === traget){
            return mid;
        }

        
        if(traget > nums[mid]){
            left = mid + 1
        }
        else{
            right = mid -1
        }
    }
    return -1
}

console.log(binarySearch(arr,7))