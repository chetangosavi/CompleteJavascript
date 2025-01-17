const copyArrayMultBy2 =(arr)=>{
    const output = [];
    for(let i = 0; i<arr.length; i++){
        output.push(arr[i]*2)
    }
    return output;
}

const arr = [1,2,3]
const result = copyArrayMultBy2(arr);
console.log(result);