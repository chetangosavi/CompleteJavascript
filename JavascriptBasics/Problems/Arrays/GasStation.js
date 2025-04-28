const petrol = [1,2,3,4,5]
const costToNextDestination = [3,4,5,1,2]

function isTripPossible(pt,cost){
    let isPossible = false;
    let sumOfPt = pt.reduce((acc,cur) =>{
        acc+=cur
        return acc
    })
    let sumOfCost = cost.reduce((acc,cur) =>{
        acc+=cur
        return acc
    })

    if(sumOfCost <= sumOfPt){
        isPossible = true;
    }

    return isPossible;
}

function gasStation(pt,cost){
    const n = pt.length
    let startIndex = -1
    for(let i = 0; i < n; i++){
        for(let j = 0; j <n; j++){
            let index = (i+j) % n;
            console.log("Index:",index)
            if(Math.abs(pt[index] - cost[index])){

            }
        }
        console.log(" ")
    }
}




let isTrip = isTripPossible(petrol,costToNextDestination)
console.log(isTrip)
if(isTrip){
    gasStation(petrol,costToNextDestination)
}



