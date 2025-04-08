const arr = [4,5,6,9,8,3]

//BruteForceSolution:

    const k = 3;
    const sortedArray = arr.sort((a,b)=>b-a)
    console.log(sortedArray)
    console.log("Second Largest Element",sortedArray[1])
    console.log("kth-Largest Element",sortedArray[k-1])