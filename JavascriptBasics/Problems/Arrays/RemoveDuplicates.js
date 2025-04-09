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

    const arr = [0,0,1,1,1,2,2,3,3,4]
    // const uniqueOnly = [...new Set(arr)]
    // console.log(uniqueOnly)

    let  i = 1;
    let k = 0;
    const n = arr.length;
    
    function removeDuplicates(){
        while(i<n){
            if(arr[i] === arr[k]){
                arr.splice(i, 1); 
                k++
                i++
            }
            else{
                if(arr[k] === -1){
                    let temp = arr[i]
                    arr[1] = arr[k]
                    arr[k]=temp
                    i++
                }
            }
            
        }
    }


    console.log(removeDuplicates())
   

