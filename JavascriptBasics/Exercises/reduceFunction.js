// the most versatile function in js:

const numbers = [1, 2, 3, 4];
const doubled = numbers.reduce((acc, num) => {
    acc.push(num * 2);
    return acc;
}, []);
console.log(doubled); // Output: [2, 4, 6, 8]