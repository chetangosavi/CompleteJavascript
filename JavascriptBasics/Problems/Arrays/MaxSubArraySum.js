const arr = [3,-4,5,4,-1,7,-8]


function maxSumSubArray(nums){
    const n = nums.length;
    let max = Number.MIN_VALUE;

    for(let st = 0; st < n; st++){
        let sum = 0;
        for(let end = st; end < n ; end++){
            sum+=nums[end];
            max = Math.max(max,sum);
        }
    }
    return max;
}

console.log(maxSumSubArray(arr))