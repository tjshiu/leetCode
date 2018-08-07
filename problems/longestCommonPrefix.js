/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z.
*/


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length <= 1) return  strs[0] || "";
    
    strs = strs.sort();
    let last = strs.length - 1
    let result = ""
    for (let i = 0; i < strs[0].length && i < strs[last].length; i++) {
        let word = strs[0];
        let lastWord = strs[last];
        if (word[i] === lastWord[i]) {
            result += word[i]
        } else {
            break;
        }      
    }
    
    return result;
};