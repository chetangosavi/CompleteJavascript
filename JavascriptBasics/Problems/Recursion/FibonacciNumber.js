
//printing nth fibonacci number
function fibonaciNumber(n){
    if(n <= 1){
        return n;
    }
    else{
        return fibonaciNumber(n-2) + fibonaciNumber(n-1)
    }
}

//function to print complete fibonacci series
function printFibo(count,current = 0){
    if(current == count) return;
    console.log(fibonaciNumber(current))
    return printFibo(count, current + 1)
}

console.log(printFibo(5))