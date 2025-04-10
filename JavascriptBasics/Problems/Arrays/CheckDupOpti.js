const arr1 = [8,8,2,3,4,5,6]

function checkDuplicates(arr){
    const map = new Map();
    const n = arr.length;
    
    for(let i = 0; i<n ; i++){
        const num = arr[i]
        if(map.has(num)){
            return false
        }
        map.set(num,i)
    }
    return true
}

const isPresent =  checkDuplicates(arr1)

if(isPresent){
    console.log("No duplicate Found")
}
else{
    console.log("Duplicate Found")
}