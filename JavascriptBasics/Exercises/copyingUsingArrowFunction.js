function copyArrayAndManipulate(arr, instruction) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
      newArr.push(instruction(arr[i]));
    }
  
    return newArr;
  }
   
  const arr = [1, 2, 3];
  const result = copyArrayAndManipulate(arr, input => input*2);
                                                    //  just passing arrow function directly into function call
  console.log(result);