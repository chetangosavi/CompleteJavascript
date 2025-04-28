function pascalsTriangle(numberOfRows){
    let result = []
    // console.log(result.length)

    let  i = 0;
    while(i < numberOfRows){
        let temp = [1]
        if(result.length === 0){
            result.push(temp)
            i++
        }
        else{
            // console.log("hi")
            const j = 0
            while(j < i){
                
            }
            temp.push()
            i++
        }
        // console.log(prev)
    }
    
    return result
}

const ans = pascalsTriangle(5)
console.log(ans)