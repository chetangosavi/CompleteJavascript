const str ="Question: Given an integer array `nums` and an integer `k`, return the number of subarrays whose sum is divisible by `k`. Constraints: - 1 <= nums.length <= 3 * 10^4 - -10^4 <= nums[i] <= 10^4 - 2 <= k <= 10^4 Example Input/Output: - Input: nums = [4,5,0,-2, -3, 1], k = 5 - Output: 7 //Subarrays with sum divisible by 5 are: [4,5,0,-2,-3,1], [4,5,0], [4,5,0,-2,-3], [0], [-2,-3,1], [5], [0,-2,-3,1]";

const parts = str.split("Constraints");

const questionPart = parts[0].replace("Question","")
// console.log(questionPart)
// console.log(parts[1])
const constraintParts = parts[1]? parts[1].split("Example Input/Output:")[0].trim():"";

console.log(constraintParts)
