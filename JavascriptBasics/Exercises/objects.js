const person = {
    name : "chetan",
    age:25,
}

delete person.name            //deleting from object   //delete only works on objects it does not affect normal variables
person["name"] = "chetan"     // adding new key value pair dynamically
// console.log(person)

//accesing object properties : ways

const name = person.name
const age = person["age"]

//Looping through an object :

// 1

for(key in person){
    // console.log(key,"  ",person[key])
}

const obj = {
    num : 1,
    int : 2,
    num : 3
}

// console.log(obj) //when assigned key with same name it overrides the first appearence at same position but with new value
// console.log("object" * 2)  //Output - NaN
// console.log(typeof(10) === "number") 

// console.log(person.toString()) //----------> "[object Object]"
// console.log(JSON.stringify(person))  //-----> Converts into JSON object { "name":"chetan", "age":25}
// console.log(JSON.parse(JSON.stringify(person))) //----> convert back the json object to normal object
// console.log(JSON.stringify(person , ["age"]))  //--> only stringify given properties in square brackets



//----------------------------------------------------------------------------------------------------------------------------------

var a = {}
var b = {key:'b'} 
var c = {key:'c'}

a[b] = 600    //--> a["[object Objcet"] = 600
b[c] = 700    //--> b["[object Objcet"] = 700
b[b] = 400    //--> a["[object Objcet"] = 400

// console.log(a[c])   //600
// console.log(a[b])   //600
// console.log(b[b])   //400
// console.log(b[c])   //400

//Note when we use object as a key it automatically gets stringified into "[object Object]"
//so here a[b] -> a["[object Object]"] --- 600  so 600 gets assigned to a and same for b

//------------------------------------------------------------------------------------------------------------------------------------


//destructring nested objects

const user = {
    name :"chetan",
    fullname: {
        first: "chetan",
        middle:"gajendra",
        last:"gosavi"

    },
    age:25
}

 const {name:myName ,fullname:{first,middle,last}} = user;
 //      \
 //     if code has same variable name we can change name here using : then rename
 // also we can destructure nested values  -> fullname:{first,middle,last}

// console.log(first)


//------------------------------------------------------------------------------------------------------------------------------------

//how to create a deep copy of object :

const userrr =  {
    name :"chetan",
    age:25
}

const us = {...userrr} //way 1
const objClone =  Object.assign({},userrr) //way 2
const anotherObjClone = JSON.parse(JSON.stringify(userrr)); //way 3

// console.log("Clone using spread: ",us)
// console.log("Clone using Object.assign() : ",objClone)