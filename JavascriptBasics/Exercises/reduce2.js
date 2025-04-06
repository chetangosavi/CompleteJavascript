//flaten an array
const nested = [[1, 2], [3, 4], [5, 6]];

const flat = nested.reduce((acc,cur)=>{
    return acc.concat(cur)
},[]);

// console.log(flat)
//---------------------------------------------------------------------------------


//calculatin frequnecy in array:

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const frequnecyObject = fruits.reduce((acc,fruit)=>{
    acc[fruit] = (acc[fruit] || 0 ) + 1;
    return acc
},{})

// console.log(frequnecyObject);

//-----------------------------------------------------------------------------------

const freq = [1,2,3,4,2,5,3,1,5,6,1,2,3,5,9,8,7,8,6]

const numberFreq = freq.reduce((acc,number)=>{
 acc[number] = (acc[number] || 0)+1
 return acc
},{})

// console.log(numberFreq)

// acc[fruit] = (acc[fruit] || 0) + 1;
// It means:
// If acc[fruit] already exists, use its value.
// If it doesn’t exist (i.e., it’s undefined), use 0.
// Then, add 1.


//-------------------------------------------------------------------------------------

const numbers = [1, 2, 3, 4, 5, 6];

// Use reduce to get the sum of only even numbers
const result = numbers.reduce((acc,cur)=>{
 if(cur%2==0){
    acc+=cur
 }
 return acc
},0);

// console.log(result); // 👉 12


//--------------------------------------------------------------------------------------


const nums = [11, 24, 7, 50, 32];

// Use reduce to find the largest number
const max = nums.reduce(
    (acc,curr)=>Math.max(acc,curr)
);

// console.log(max); // 👉 50

//--------------------------------------------------------------------------------------


const words = ['apple', 'banana', 'cherry'];

// Expected output:
// { apple: 5, banana: 6, cherry: 6 }

const wordLengths = words.reduce((acc,word)=>{
    acc[word] = (acc[word] || 0) + word.length
    return acc
},{});

// console.log(wordLengths);

//--------------------------------------------------------------------------------------


const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 20 },
    { name: 'Charlie', age: 25 },
    { name: 'David', age: 20 },
  ];
  
  // Expected output:
  // {
  //   25: [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 }],
  //   20: [{ name: 'Bob', age: 20 }, { name: 'David', age: 20 }]
  // }
  
  const grouped = people.reduce((acc,person)=>{
    const age = person.age
    if(!acc[age]){
        acc[age]=[]
    }

    acc[age].push(person)
    return acc
  },{});
  
//   console.log(grouped);
//---------------------------------------------------------------------------------------

const nestedw = [[1, 2], [3, 4], [5, 6]];

// Expected output: [1, 2, 3, 4, 5, 6]
const flat2 = nested.reduce((acc,curr)=>acc.concat(curr),[]);

// console.log(flat);

//---------------------------------------------------------------------------------------

const cart = [
    { name: 'Shirt', price: 1200 },
    { name: 'Jeans', price: 2500 },
    { name: 'Shoes', price: 3000 }
  ];
  
  // Expected output: 6700
  const total = cart.reduce((acc,product)=>{
    return acc += product.price
  },0);
  
  console.log(total);

  //------------------------------------------------------------------------------------

  const str = "chetan is learning reduce";

// Expected output: 9
// (Count: e, a, i, etc.)
const vowels = ['a', 'e', 'i', 'o', 'u'];
const count = str.split('').reduce((acc,character)=>{
    if(vowels.includes(character)){
        acc++;
    }
    return acc
},0);

// console.log(count);

//--------------------------------------------------------------------------------------

const entries = [['name', 'Chetan'], ['age', 23], ['role', 'developer']];

// Expected output: { name: 'Chetan', age: 23, role: 'developer' }
const obj = entries.reduce((acc,[key,value])=>{
    acc[key] = value;
    return acc
},{});

// console.log(obj);

//---------------------------------------------------------------------------------------


const word = "banana";

// Expected output: { b: 1, a: 3, n: 2 }
const freqChar = word.split('').reduce((acc,character)=>{
    acc[character] = (acc[character] || 0)+1
    return acc
},{});

console.log(freqChar);


