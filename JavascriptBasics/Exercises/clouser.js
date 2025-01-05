function outer(){
    let counter = 0;
    function counterInc(){
        return ++counter;
    }

   return counterInc
}

const generateFnc = outer();
console.log(generateFnc());    
console.log(generateFnc());     
console.log(generateFnc());     

const anotherFnc = outer();
console.log(anotherFnc());      
console.log(anotherFnc());      

//Output
// 1
// 2
// 3
// 1
// 2