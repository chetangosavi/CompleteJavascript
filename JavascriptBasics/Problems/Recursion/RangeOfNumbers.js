
function rangeOfNumbers(start,end){
    if(end<start){
        return []
    }
    else{

        let number = rangeOfNumbers(start, end-1)
        number.push(end)
        return number
    }
}

console.log(rangeOfNumbers(1,5))