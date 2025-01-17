const map =(arr,callback)=>{
output = []
for(let i =0;i<arr.length;i++){
    output.push(callback(arr[i]))
}

return output;
}

const arr = [1,2,3]
const result = map(arr,input=>input*2)
console.log(result);