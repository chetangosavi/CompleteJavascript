function onceFuntion(){
    let isCalled = false;
    return function(input){
        if(!isCalled){
            isCalled = true;
            console.log( input*2);
        }
        else{
            console.log("Sorry")
        }
    }
}

const result = onceFuntion()
result(2)
result(44)
result(6)