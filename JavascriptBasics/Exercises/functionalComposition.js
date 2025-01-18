const multBY2 = (num)=> num*2;
const add5 = (num)=> num + 5;
const divBy5 = (num)=> num/5;

const res = [multBY2, add5,divBy5].reduce((acc,fn)=>fn(acc),10);

console.log(res)


//another way without using reduce function:

const reduce = (arr,howToBuild,accumulator)=>{
    for(let i =0; i<arr.length;i++){
        accumulator = howToBuild(accumulator,arr[i])
    }
    return accumulator;
}
const howTo = (input,fn)=>{
    return fn(input)
}

const result = reduce([multBY2,add5,divBy5],howTo,20)
console.log(result)