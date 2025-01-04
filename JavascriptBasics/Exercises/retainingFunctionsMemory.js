function outer(){
    let counter = 0;
    function counterInc(){
        return counter++;
    }

    return counterInc
}

const generateFnc = outer();
console.log(generateFnc());
console.log(generateFnc());
console.log(generateFnc());
