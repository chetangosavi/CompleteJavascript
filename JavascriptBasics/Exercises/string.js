const str1 =
  "Question: Given an integer array `nums` and an integer `k`, return the number of subarrays whose sum is divisible by `k`. Constraints: - 1 <= nums.length <= 3 * 10^4 - -10^4 <= nums[i] <= 10^4 - 2 <= k <= 10^4 Example Input/Output: - Input: nums = [4,5,0,-2, -3, 1], k = 5 - Output: 7 //Subarrays with sum divisible by 5 are: [4,5,0,-2,-3,1], [4,5,0], [4,5,0,-2,-3], [0], [-2,-3,1], [5], [0,-2,-3,1]";

const parts = str1.split("Constraints");

const questionPart = parts[0].replace("Question", "");
// console.log(questionPart)
// console.log(parts[1])
const constraintParts = parts[1]
  ? parts[1].split("Example Input/Output:")[0].trim()
  : "";

// console.log(constraintParts)

//-----------------------------------------------------------------------------------------------------

//Q1: Convert the string to uppercase

const str = "hello chetan";

// 👉 Expected: "HELLO CHETAN"
const upper = str.toUpperCase();

// console.log(upper);

//-------------------------------------------------------------------------------------------------------

// Q2: Check if the string contains the word "dev"

const strFor = "my name is ramdev";

const isPresent = strFor.includes("dev");
// console.log(isPresent) //-->returns boolean value

const index = strFor.indexOf("dev");
// console.log(index)  //->returns the starting index

//-------------------------------------------------------------------------------------------------------

// Q3: Get the first 5 characters of the string

const strnew = "akdjfhasdkjfh";
const newStr = strnew.slice( 0,5)
// console.log(newStr)

//-------------------------------------------------------------------------------------------------------

//Q4: Remove the extra whitespace

const whitespace = '  adfafgajhfdj '
// console.log("Before:",whitespace)
// console.log("After:",whitespace.trim());

//-------------------------------------------------------------------------------------------------------

//Q5: Replace "JS" with "JavaScript"

const code = "I love JS";

// 👉 Expected: "I love JavaScript"
const replaced = code.replace(/js/i,"javascript");
// console.log(replaced);

//-------------------------------------------------------------------------------------------------------

// Q6: Check if the string starts with “Hello”

const greeting = "Hello, Chetan!";

// 👉 Expected: true
const startsWithHello = greeting.startsWith('Hello');

// console.log(startsWithHello);

//-----------------------------------------------------------------------------------------------------


//Q7: Check if the string ends with “.js”
const filename = "script.js";

// 👉 Expected: true
const endsWithJs = filename.endsWith('.js');

// console.log(endsWithJs);

//----------------------------------------------------------------------------------------------------

// Q8: Count how many words are in the sentence

const sentence = "JavaScript is fun to learn";

// 👉 Expected: 5
const wordCount = sentence.split(' ').length;

// console.log(wordCount);

//----------------------------------------------------------------------------------------------------

// Reverse the string

const namee = "Chetan";

// 👉 Expected: "natehC"
const reversed = namee.split("").reverse().join("");

// console.log(reversed);

//----------------------------------------------------------------------------------------------------

//Q10: Capitalize the first letter only

const word = "chetan";

// 👉 Expected: "Chetan"
const capitalized = word[0].toUpperCase();

// console.log(capitalized);

//--------------------------------------------------------------------------------------------------

//remove last character , remove first character

const strremove = "savitribai";

const  removedFirst = strremove.substring(1,strremove.length);
// console.log(removedFirst);
const  removedLast = strremove.substring(0,strremove.length-1);
// console.log(removedLast);

//--------------------------------------------------------------------------------------------------

const strto = 'I am batman';
//reverse string and also reverse each word

const reversedString =  strto.split(" ").reverse().join(' ')
// console.log(reversedString);

const wordRev = reversedString.split(" ")
                .map((word)=>word.split("").reverse().join(""))
                .join(" ")

                // console.log(wordRev)

//--------------------------------------------------------------------------------------------------

//Q2: Count vowels in a string
const Input = "Chetan is learning JS"
const vowels = ['a','e','i','o','u']
const totalOfVowels =  Input.toLowerCase()
                      .split("")
                      .filter((character)=> vowels.includes(character)).length

                      // console.log(totalOfVowels)

//---------------------------------------------------------------------------------------------------

//Q3: Capitalize the first letter of each word
// Input: "hello world from chetan"
// Expected: "Hello World From Chetan"

const star = "hello world from chetan"

const newStr2 = star.split(" ")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ") 

                // console.log(newStr2)

//----------------------------------------------------------------------------------------------------

// Q4: Find the longest word in a string
// Input: "Web development is fun"
// Expected: "development"

const longer = "Web development is fun"

const longestword = longer.split(" ")
                          .reduce((longestWord,currentWord)=>{
                           return currentWord.length > longestWord.length ? currentWord : longestWord
                          })
                          // console.log(longestword)

//-----------------------------------------------------------------------------------------------------

//  Q5: Remove duplicate characters
// Input: "programming"
// Expected: "progamin"

const startrek = "programming"

const removedDuplicate = startrek.split("")
                        .filter((char,index,arr) => arr.indexOf(char) === index )
                        .join('')
                        // console.log(removedDuplicate)

//---------------------------------------------------------------------------------------------------

// Q6: Count frequency of each character (like reduce)
// Input: "hello"
// Expected: { h: 1, e: 1, l: 2, o: 1 }

const st = "hello"

const newsss = st.split("")
                 .reduce((acc,crr)=>{
                  acc[crr] = (acc[crr] || 0) + 1
                  return acc
                 },{})

                //  console.log(newsss)

//---------------------------------------------------------------------------------------------------

// Q7: Convert a sentence to camelCase
// Input: "hello world from chetan"
// Expected: "helloWorldFromChetan"

const hh =  "hello world from chetan"

const camelCaseHH = hh.split(" ")
                  .map((word,index)=>{
                    return index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1)
                  })
                  .join('')

                  // console.log(camelCaseHH)

                  

//------------------------------------------------------------------------------------------------------

// Check if two strings are anagrams
// Input: "listen", "silent"
// Expected: true

const st1 = "silnet"
const st2 = "silent"

const isAnagram = (st1,st2) => {
  const normalise =  str => str.split("").sort().join('');
  return normalise(st1) === normalise(st2)
}
// console.log( isAnagram (st1,st2))

//------------------------------------------------------------------------------------------------

function test(){
  //  console.log(test.abc)
}

// test()

test.abc = 400
test.abc = 600

// test()

//-------------------------------------------------------------------------------------------------

function test(record){
  console.log(record)
  if(record.age == 28){
    console.log("Your an adult")
    return
  }else if(record == {age:38}){
    console.log("Your still an adult")
    return
  }
  else{
    console.log("no Record")
  }
}

// test({age:28})

//-----------------------------------------------------------------------------------------------------------

// console.log(+true)
// console.log(!"str")
// console.log(!!"str")

//----------------------------------------------------------------------------------------------------------


//Convert "the sky is blue" to "Blue Is Sky The"
// Expected: PascalCase reversed

const strr = "the sky is blue" 
const PascalCase = strr.split(" ").reverse()
                  .map(word=>{
                    return word.charAt(0).toUpperCase() + word.slice(1)
                  })
                  .join(" ")

                  // console.log(PascalCase)

//----------------------------------------------------------------------------------------------------------

// Find all duplicate characters in a string
// Input: "aabbccdde"
// Expected: [ 'a', 'b', 'c', 'd' ]
// (Hint: Use an object or Set to track counts)

const stu = "aabbccdde"
const duplicates = stu.split("")
                  .reduce((acc,character)=>{
                    acc[character] = (acc[character] || 0) + 1
                    return acc
                  },{})     
              
const filtered = Object.entries(duplicates)
                .filter(([char,count])=> count > 1)

const onlyChars = filtered.map(([char])=> char)

                  // console.log(onlyChars)



//-----------------------------------------------------------------

//Join two strings alternatively 

let strr1 = 123;
let strr2 =  "abcdef";

strr1 = strr1.toString()
strr2 = strr2.toString()

const maxLength = Math.max(strr1.length, strr2.length)
// console.log(maxLength)

let result = "";
for( let i = 0; i < maxLength; i++){
  if(i < strr1.length) result+=strr1[i]
  if(i < strr2.length) result+=strr2[i]
}
// console.log(result); 

//--------------------------------------------------------------------------------------------------