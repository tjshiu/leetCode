/*
Given an array containing n distinct numbers taken from 0, 1, 2, ..., n,
find the one that is missing from the array.

Example 1:

Input: [3,0,1]
Output: 2
Example 2:

Input: [9,6,4,2,3,5,7,0,1]
Output: 8
Note:
Your algorithm should run in linear runtime complexity. Could you implement it
using only constant extra space complexity?
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
     const length = nums.length;
     let sum = 0;
     let indexSum = length;

     for (let i = 0; i < length; i++) {
         sum += nums[i];
         indexSum += i;
     }

     return indexSum - sum;
 };

/*
other ways it can be solved with Gauss' formula
sum from 1 to n = (n (n + 1)) / 2

var missingNumber = function(nums) {
    var sum = 0, l = nums.length
    for (var i = 0; i < l; i++) {
        sum += nums[i]
    }

    return l * (l + 1) / 2 - sum
};
*/

/*
Also can be solved with bit manipulation

var missingNumber = function(nums) {
  let missing = nums.length;
  for (let i = 0; i < nums.length; i++) {
    missing ^= i ^ nums[i];
}
return missing;
}
*/
