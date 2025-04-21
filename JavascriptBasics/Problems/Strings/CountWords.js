const str =  "My name is namaste london"

function countNumberOfWords(string){
    let arrOfStr = string.split(" ")
    return arrOfStr.length;
}

console.log(countNumberOfWords(str))