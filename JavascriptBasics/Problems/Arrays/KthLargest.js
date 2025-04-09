const arr = [4,5,6,9,8,3]

//BruteForceSolution:

    const k = 3;
    const sortedArray = arr.sort((a,b)=>b-a)
    console.log(sortedArray)
    console.log("Second Largest Element",sortedArray[1])
    console.log("kth-Largest Element",sortedArray[k-1])

//Using Min Heap:


   const heap = []
   for(let num of arr){
    heap.push(num)
    heap.sort()
    if(heap.length>k) heap.shift()
   }

   console.log("Kth largest Number Using MinHeap: ",heap[0])