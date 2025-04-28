function peak(nums){
 const n = nums.length

 for(let i = 0; i < n; i++ ){
    const n = nums.length

        for(let i = 0; i <n; i++ ){
            if( i === 0){
                if(nums[i] > nums[i+1]){
                    return i
                }
            }
            else{
                if(nums[i] > nums[i-1] && nums[i] > nums[i+1]){
                    return i
                }
            }
        }
        if(i== n-1){
            if(nums[i] > nums[i-1]){
                return i 
            }
        }
 }
}

console.log(peak([1,2,3]))