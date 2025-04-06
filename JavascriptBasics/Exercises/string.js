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

console.log(replaced);