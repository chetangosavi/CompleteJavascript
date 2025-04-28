function pascalsTriangle(numberOfRows){

    let result  = []
    for(let i = 0; i < numberOfRows; i++){
        let row = [1]
        for(let j = 1; j <= i; j++){
            
            if(j == i){
                row.push(1)
            }
            else{
                row.push(result[i-1][j-1] + result[i-1][j])
            }

        }
        result.push(row)
    }
    return result
}

console.log(pascalsTriangle(5))