const arr = [1,2,3,4,5,6,7,8,9,10,5,4,3,2,8,9,4,1,1,5,6];
// arr.forEach((value,index)=>console.log(value ,":", index))

const arrBy2 = arr.map((val)=>val*2)
// console.log(arrBy2)

const map = (arr,fun) => {
    const newArr = [];
    for(let i=0; i<arr.length;i++){
        newArr.push(fun(arr[i]))
    }
    return newArr
}

const multBY2 = (input)=> {
    return input*2
}

const data = map([1,2,3], multBY2)

// console.log(data);

const val = arr.find((num)=>num===4)          //returns number if present else return undefined(first occurance)
const index = arr.findIndex((num)=>num===4)  //returns index of element if present(first occurance)
// console.log(val+":"+index)
const isPresent = arr.includes(4)
console.log(isPresent)          //returns boolean value if element is present in array