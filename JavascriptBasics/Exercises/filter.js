const numbers = [1, 2, 3, 4, 5, 6];

//Even numbers from array:
const even = numbers.filter( (value) => value%2==0 )
// console.log(even);


//-------------------------------------------------------------------

const people = [
    { name: 'Chetan', age: 23 },
    { name: 'Mini', age: 16 },
    { name: 'Ravi', age: 18 },
  ];

//filter people based on age >= 18

const filteredByAge = people.filter(people=>people.age>=18)
// console.log(filteredByAge)

//--------------------------------------------------------------------

const words = ['hi', 'hello', 'hey', 'goodbye', 'yo'];

// 👉 Expected: ['hello', 'goodbye']
const longWords = words.filter( string => string.length > 4);

// console.log(longWords);

// -------------------------------------------------------------------------------------


const users = [
    { name: 'Chetan', active: true },
    { name: 'Ravi', active: false },
    { name: 'Mini', active: true }
  ];
  
  // 👉 Expected: [{ name: 'Chetan', active: true }, { name: 'Mini', active: true }]
  const activeUsers = users.filter(user=>user.active == true);
  
//   console.log(activeUsers);
  
//------------------------------------------------------------------------------------------

//Q4: Filter numbers divisible by 3 and greater than 10

const nums = [3, 9, 12, 15, 21, 25, 30];

// 👉 Expected: [12, 15, 21, 30]
const filtered = nums.filter(num=>{
   return num > 10 && num % 3 == 0
});

console.log(filtered);
