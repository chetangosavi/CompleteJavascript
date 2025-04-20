const arr = [1,2,3,4,5,6,8,2,1,9,6]

function linearSearch(nums,nuberToFind){

    const n = nums.length
    for(let i = 0; i < n; i++ ){
        if(nums[i] === nuberToFind){
            return i
        }
    }
}

console.log("Number found at index: ",linearSearch(arr,5))