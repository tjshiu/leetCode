/*Given two strings s and t, determine if they are isomorphic.

Two strings are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

Example 1:

Input: s = "egg", t = "add"
Output: true
Example 2:

Input: s = "foo", t = "bar"
Output: false
Example 3:

Input: s = "paper", t = "title"
Output: true
Note:
You may assume both s and t have the same length.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;
    return letterMap(s, t) && letterMap(t, s);
};

let letterMap = function(word1, word2) {
    let map = {};
    for (let i = 0; i < word1.length; i++) {
        let char1 = word1[i];
        let char2 = word2[i];
        if (map.hasOwnProperty(char1)) {
            if (map[char1] !== char2) return false;
        } else {
            map[char1] = char2;
        }
    }
    return true;
}