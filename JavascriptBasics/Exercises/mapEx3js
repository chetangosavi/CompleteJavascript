const dates = ["2024-1-10","2025-2-20","2026-3-30"]

const newDates = dates.map(date=>{
    const newDate = date.split("-")
    let finaldate = `${newDate[0]}/${newDate[1]}/${newDate[2]}`
    return finaldate

})

// console.log(newDates)

//------------------------------------------------------------------------------------

// Q1: From a list of numbers, get the squares of only even numbers

const numbers = [1, 2, 3, 4, 5, 6];

// 👉 Expected: [4, 16, 36]
const result = numbers
  .filter(num =>num % 2 == 0)
  .map(num => num * num);

// console.log(result);

//--------------------------------------------------------------------------------------

//Q2: From a list of users, get the names of only active users
const users = [
    { name: 'Chetan', active: true },
    { name: 'Ravi', active: false },
    { name: 'Mini', active: true }
  ];
  
  // 👉 Expected: ['Chetan', 'Mini']
  const activeNames = users
    .filter(user => user.active == true )
    .map(user =>user.name );
  
//   console.log(activeNames);
  
  //------------------------------------------------------------------------------------

//Q3: From products, get a list of titles of items that cost > 1000
const products = [
    { title: 'Shoes', price: 1500 },
    { title: 'Socks', price: 200 },
    { title: 'Jacket', price: 2500 }
  ];
  
  // 👉 Expected: ['Shoes', 'Jacket']
  const expensive = products
    .filter(p => p.price > 100)
    .map(p => p.title);
  
//   console.log(expensive);
  

