function printingNDigits(n){
    if(n === 0){
        return 0;
    }
    else{
        console.log(n)
        return printingNDigits(n-1)
    }
}

printingNDigits(5)