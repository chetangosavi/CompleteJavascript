const arr = [1,2,3]
const arr2 = [2,3,4]

const removedDuplicates = [...new Set(arr)]
// console.log(removedDuplicates.sort())


//Intersection
const intersection = arr.filter((number)=> new Set(arr2).has(number))
// console.log(intersection)

const person = {
    name: "Chetan",
    greet(place) {
      console.log(`Hi, I’m ${this.name} from ${place}`);
    },
  };
  
  const greetFn = person.greet;
  greetFn.call(person,"Delhi");
  