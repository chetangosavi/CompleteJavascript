function createFunction(){
    function multiplyBy2(num){
        return num*2;
    }
    return multiplyBy2;
}

const generateFunction = createFunction();
const result = generateFunction(3);
console.log("Result of innerFunction: "+result)