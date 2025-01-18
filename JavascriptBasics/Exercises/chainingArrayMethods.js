const arr = [1,2,3,4,5]
function add(a,b){
    return a+b
}

function filter(num){
    return num>2
}

const sumedUp = arr.filter(filter).reduce(add,0)
console.log(sumedUp)