const arr = [3,2,4]    //unsorted ---> two pointers approach wont work unless array is sorted
const target = 6;

//Solution: Using Map()

const n = arr.length;

let twoSum = function(){
    let map  = new Map()

    for(let i = 0; i<n; i++){
        let num = arr[i]
        let complement = Math.abs(num - target)  

        if(map.has(complement)){
            return [map.get(complement),i]
        }

        map.set(num,i)
    }

    return []

}

console.log(twoSum())

