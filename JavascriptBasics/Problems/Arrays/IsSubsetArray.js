const a = [10, 5, 2, 23, 19]
const b = [19, 5, 3]

function CheckForSubset(nums,nums2){
    const n = nums2.length
    let isSubset = true;
    for(let i = 0; i < n; i++){
        if(!nums.includes(nums2[i])){
            isSubset = false;
        }
    }
    return isSubset
}

const isSubset = CheckForSubset(a,b)

if(isSubset){
    console.log("B is a Subset of A")
}
else{
    console.log("B is not a Subset of A")
}