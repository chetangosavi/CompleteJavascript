const arr = [3,1,-2,-5,2,-4]

function reArrange(nums){
    const tempArr = []
    let positive = 0
    let negative = 1
    const n = nums.length
    let i = 0
    while(i < n){
        if(nums[i]>0){
            tempArr[positive] = nums[i]
            positive+=2
        }
        else{
            tempArr[negative] = nums[i]
            negative+=2
        }
        i++
        
    }
    return tempArr
    
}

console.log(reArrange(arr))

//uput - [ 3 -2 1 -5 2 -4 ]