//Check If The String is Palindrom or not

    const str = "chetan"
    let  i = 0;
    let  j = str.length - 1

    const strArr =  str.split('')
    let isPalindrom = true;

    while(i<=j){
        if(strArr[i] !== strArr[j]){
            isPalindrom = false
        }
        i++
        j--
    }

    if(isPalindrom){
        console.log("Yes its palindrom")
    }
    else{
        console.log("Nope, Not Palindrom")
    }
