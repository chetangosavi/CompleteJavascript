function displayData(data){
    console.log(data)
}

const futureData = fetch('https://fakestoreapi.com/products/1')
.then(res=>res.json())
.then(json=>displayData(json))

console.log("Me First")