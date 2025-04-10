// You are given a sorted array nums. Remove the duplicates in-place such that each unique element appears 
// only once and return the new length.

// Constraints:
//     Do not use extra space.
//     The input array should be modified in-place.
//     Order of elements must be maintained.

// Input: nums = [1, 1, 2]
// Output: 2, nums = [1, 2, _]

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

//brute force:

    let arr = [0,0,1,1,1,2,2,3,3,4,5,6]
    // const uniqueOnly = [...new Set(arr)]
    // console.log(uniqueOnly.length)


//Solution 2
    const n = arr.length;
    let count = 0
    
    function removeDuplicates(){

        for(let i = 0; i < n; i++){
          if(arr[i]!=arr[i+1]){
            
            arr[count] = arr[i]   
            count++
            
          }
        }
       return count
    }

    const uniqueCount = removeDuplicates()
    console.log(uniqueCount)
    console.log(arr.splice(0,uniqueCount))
    
   


    
 