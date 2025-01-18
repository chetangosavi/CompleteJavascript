
const arr = [1,2,3,4]
const multBy2 = (input)=>{
    return input * 2
}
const result = arr.map(multBy2)
console.log(result)


// This works even though function is used before it is declared but in case of arrow function it does not 
const arr1 = [1,2,3,4]

const result1 = arr.map(multiBy2)
console.log(result)

function multiBy2 (input){
    return input * 2
}


// arrow function need to be declared before they are used but normal function can be declared anywhere and used anywhere