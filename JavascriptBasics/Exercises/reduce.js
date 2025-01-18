const reduce = (arr,howToAcc,accumulator)=>{
    for(let i = 0;i<arr.length;i++){
        accumulator = howToAcc(arr[i],accumulator)
    }

    return accumulator;
}

const add = (a,b)=> a+b
const result = reduce([1,2,3,4],add,0);

console.log(result)