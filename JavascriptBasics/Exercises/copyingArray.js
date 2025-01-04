function copyArrayAndManipulate(arr, instruction) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(instruction(arr[i]));
  }

  return newArr;
}

function multiplyBy2(input) {
  return input * 2;
}

const arr = [1, 2, 3];
const result = copyArrayAndManipulate(arr, multiplyBy2);
console.log(result);
