const arr = [0,1,1,1,0,1,0,1,1,1,1,0,1]
const arr2 = [0,1]
const arr3 = [0]
const arr4 = [1,1]
const arr5 = [0,0,0,0]


function consecutiveOnes(nums){

    const n = nums.length;
    let count = 0;
    let max = 0;
    
    for(let i = 0; i < n; i++){

        if(nums[i] === 1){
            count++
            max = Math.max(count,max)
        }
        else{

            count = 0;
        }

        
    }

    return max;
}

console.log(consecutiveOnes(arr))