/*
Given an array nums of n integers where n > 1,  return an array output such that
output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? (The output array does not
count as extra space for the purpose of space complexity analysis.)
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function(nums) { //[1, 2, 3, 4];
  let length = nums.length;
  let result = new Array(length);
  result[0] = 1; //[1, null, null, null]
  for (let i = 1; i < length; i++) {
    result[i] = result[i - 1] * nums[i - 1]; //[1, 1, null, null], [1, 1, 2, null], [1, 1, 2, 6]
  }

  let right = 1;
  for (let i = length - 1; i >= 0; i--) {
    result[i] *= right; //[1, 1, 2, 6], [1, 1, 8, 6], [1, 12, 8, 6], [24, 12, 8, 6]
    right *= nums[i]; // 4, 12, 24
  }

  return result;
};
