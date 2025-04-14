//Q)Find first negative integer in every window of size k

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
const k = 4


//Brute Force O(n2)
    // function firstNegativeIntInEveryWindow(nums){
        
    //     let n = nums.length;
    //     let left = 0
    //     let right = 0

    //     let negatives = []
        
    //     for(let i = 0; i<= n-k;i++){
    //         let foundNegative = false;
    //         for(let j = i; j< i+k; j++){
    //             if(nums[j]<0){
    //                 negatives.push(nums[j])
    //                 foundNegative = true
    //                 break
    //             }
    //         }
    //         if (!foundNegative) {
    //             result.push(0);
    //         }
    //     }

    //     return negatives

    // }

    // console.log(firstNegativeIntInEveryWindow(arr))


    //Optimized using Sliding window O(n)
    function firstNegative(nums){

        let n = nums.length;
        let left = 0
        let right = 0

        let tempArr = []
        let finalAns = []

        while(right < n){

            if(nums[right]<0){
                tempArr.push(nums[right])
            }

            if(right - left + 1 === k){
               if(tempArr != null){
                 finalAns.push(tempArr[0])
               }
               else{
                finalAns.push(0)
               }
                
                if(nums[left]<0){
                    tempArr.shift();
                }
                left++
            }

            right++   
        }
        return finalAns;

    }

    console.log(firstNegative(arr))