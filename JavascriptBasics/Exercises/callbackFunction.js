
function outer(input,additionWith2){
    let iscalled = false;
    return additionWith2(input)
}

function additionWith2(input){
    return input+2;
}

const result = outer(4,additionWith2)
console.log(result);

