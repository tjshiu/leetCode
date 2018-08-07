/*
The count-and-say sequence is the sequence of integers with the first five terms as following:

1.     1
2.     11
3.     21
4.     1211
5.     111221
1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.
Given an integer n, generate the nth term of the count-and-say sequence.

Note: Each term of the sequence of integers will be represented as a string.

Example 1:

Input: 1
Output: "1"
Example 2:

Input: 4
Output: "1211"
*/
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n === 1) return "1";
    if (n === 2) return "11";
    return wordify(countAndSay(n - 1)) 
};

var wordify = function(string) {
    let count = 1;
    let result = "";
    for (let i = 0; i < string.length - 1; i++) {
        let num = string[i];
        let nextNum = string[i + 1];
        if (nextNum !== num) {
            result += count + num; 
            count = 1;
        } else {
            count += 1
        }
    }
    
    return result += count + string[string.length - 1];
};