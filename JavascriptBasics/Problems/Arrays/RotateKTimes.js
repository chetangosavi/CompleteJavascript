//Rotate array using push pop shift unshit approach:

const arr = [1,2,3,4,5]
k = 2

//right rotate
function rotateRight(nums){
    for(let i = 0; i < k; i++){
        let elm = nums.pop();
        nums.unshift(elm)
    }

    return nums;
}

const arr2 = [1,2,3,4,5]
//Left rotate
function rotateLeft(nums){
    for(let i = 0; i < k; i++){
        let elm = nums.shift();
        nums.push(elm)
    }

    return nums;
}


 console.log("Rigt Rotate: ",rotateRight(arr))
 console.log("Left Rotate: ",rotateLeft(arr2))