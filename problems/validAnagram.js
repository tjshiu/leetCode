/**
Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?

 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    const charCount = {};

    for (let i = 0; i < s.length; i++) {
        let ch = s[i];

        if (charCount[ch]) {
            charCount[ch]++;
        } else {
            charCount[ch] = 1;
        }
    }

    for (let j = 0; j < t.length; j++) {
        let ch = t[j];

        if (charCount[ch]) {
            charCount[ch]--;
            if (charCount[ch] < 0) return false;
        } else {
            return false;
        }
    }

    return true;
};
