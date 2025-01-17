const names = ["chetan","rupesh","shubham"];

const res = names.map(upperCase)
console.log(res);
function upperCase(element){
    return element.toUpperCase();
}