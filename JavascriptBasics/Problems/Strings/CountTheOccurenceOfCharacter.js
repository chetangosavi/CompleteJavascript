const str = "javascript"
const char ="a"
function countOccurence(strr,char){
    let strArr = strr.split("");
    const n = strArr.length;
    let count = 0;

    for(let i = 0; i < n; i++){
        if(strArr[i] === char){
            count++
        }
    }

    return count;
}

console.log(countOccurence(str,char));