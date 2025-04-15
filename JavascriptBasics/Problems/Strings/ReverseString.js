const str1 = "Sarveshyam"

function reverseString(str){
    const strArray = str.split("");
    const n = strArray.length;

    let right = n - 1
    let left = 0
    while(left < right){
        let temp = strArray[right]
        strArray[right] =  strArray[left]
        strArray[left] = temp

        right--
        left++
    }

    return strArray.join("")
}

console.log(reverseString(str1))