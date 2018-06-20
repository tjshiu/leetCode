/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers within
the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem,
assume that your function returns 0 when the reversed integer overflows.
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) { //slower solution
    let negative = 1;
    if (x < 0) {
        negative = -1;
    }

    let num = x.toString().split("");
    for (let i = 0; i < num.length / 2; i++) {
        let j = num.length - 1 - i;
        [num[i], num[j]] = [num[j], num[i]];
    }

    let result = parseInt(num.join(""));

    return result > 2 ** 31 ? 0 : result * negative;
};


/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
     let sign = 1;
     if (x < 0) {
         sign = -1;
         x = x * sign;
     }
     let result = 0;

     while (x > 0) {
         let lastDigit = x % 10;
         result *= 10;
         result += lastDigit;
         x = parseInt(x / 10)
     }

     if (result > 2 ** 31) return 0;

     return result * sign;
 };
