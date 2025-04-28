let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13]


function Sum(nums){
    const n = nums.length
    let result = []
    const map = new Map()
    const count = 0
    let max = Number.MIN_VALUE
    for(let i = 0; i<n; i++){
        let sum = 0
        let num = nums[i]
        while(num>0){
            let rem = num%10;
            sum += Math.floor(rem)
            num = Math.floor(num / 10)
        }

        if(map.has(sum)){
            map.set(sum,map.get(sum)+1)
            max = Math.max(map.get(sum),max)
        }
        else{
            map.set(sum,count+1)
            max = Math.max(map.get(sum),max)
        }
        result.push(sum)
        
    }

    let counterOfMax = 0
    for(let freq of map.values()){
        if(freq === max){
            counterOfMax++
        }
    }
    return counterOfMax
}

console.log(Sum(numbers))