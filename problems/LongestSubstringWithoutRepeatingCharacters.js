/*
Given a string, find the length of the longest substring without 
repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer
must be a substring, "pwke" is a subsequence and not a substring.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let start = 0;
    let chars = {};
    let maxLength = 0;

    for (let i = 0; i < s.length; i ++) {
        let ch = s[i];

        if (chars[ch] !== undefined && start <= chars[ch]) {
            start = chars[ch] + 1;
        }

        chars[ch] = i;
        let currentLength = i - start + 1;
        if (currentLength > maxLength) {
            maxLength = currentLength
        }
    }

    return maxLength;
};
