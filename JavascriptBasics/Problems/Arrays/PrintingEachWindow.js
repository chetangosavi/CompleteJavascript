const  arr = [1,2,5,5,8,9,2,6,5]
k = 4

//Brute Force Approach:
function printingEveryWindow (nums){
    const n = arr.length;
    const finalArr = []
    for(let i = 0; i< n-k; i++){
        const innerArray = []
        for(let j=i;j<i+4;j++){
            innerArray.push(nums[j]);
        }
        finalArr.push(innerArray)
    }
    return finalArr
}

console.log(printingEveryWindow(arr))