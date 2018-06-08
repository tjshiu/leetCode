/**
Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

Example:
Given a = 1 and b = 2, return 3.

Credits:
Special thanks to @fujiaozhu for adding this problem and creating all test cases.

 * @param {number} a
 * @param {number} b
 * @return {number}
 */

const getSum = function(a, b) { //(2, 3)
  if (!a) return b;

  const carry = (a & b) << 1; 
  const sum = a ^ b;
  return getSum(carry, sum);
};
