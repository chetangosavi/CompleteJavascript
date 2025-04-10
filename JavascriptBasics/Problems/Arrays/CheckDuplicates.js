const arr1 = [1,2,3,4,4,5,6]

//brute force approach

function checkDuplicates(arr){
    const n = arr.length
    for(let i = 0; i < n; i++){
        for(let j = i + 1; j < n; j++){
            if(arr[i]===arr[j]){
                return false;
            }
        }
    }
    return true
}

const isPresent =  checkDuplicates(arr1);
if(isPresent){
    console.log("No duplicate Found")
}
else{
    console.log("Duplicate Found")
}