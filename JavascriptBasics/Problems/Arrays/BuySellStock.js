const maxProfit = function(prices) {
    
    const n = prices.length

    let min = Number.MAX_VALUE
    let maxProfitOf = 0
    for(let i = 0; i < n; i++){
        if(prices[i] < min){
            min = prices[i]
        }
        else{
            let porfit = prices[i] - min
            maxProfit = Math.max(porfit,maxProfitOf)
        }
    }
    return maxProfitOf
};

console.log(maxProfit([7,6,4,3,1]))