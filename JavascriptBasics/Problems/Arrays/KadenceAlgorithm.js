const arr = [3,-4,5,4,-1,7,-8]

function kadenceAlgo(nums){
    const n = nums.length;
    let sum = 0;
    let max = Number.MIN_VALUE;
    for(let i=0; i<n;i++){
        sum+=nums[i];
        max= Math.max(sum,max)
        if(sum<0){
            sum = 0
        }
    }
    return max;
}

console.log(kadenceAlgo(arr))