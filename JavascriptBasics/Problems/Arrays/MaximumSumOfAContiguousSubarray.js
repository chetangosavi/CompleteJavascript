let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

  function maxsum(nums){

    const n =  nums.length;
    let sum = 0;
    let max = Number.MIN_VALUE;

    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            
            sum+=nums[j]
            max =  Math.max(sum,max)
        }
    

    }
    return max;

  }

  console.log(maxsum(arr))
