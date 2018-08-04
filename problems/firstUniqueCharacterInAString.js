/*
Given a string, find the first non-repeating character in it and return
it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.
*/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let chars = {};

    for (let i = 0; i < s.length; i++) {
      let ch = s[i];

      if (chars[ch]) {
        chars[ch].push(i);
      } else {
        chars[ch] = [i];
      }
    }

    for (let i = 0; i < s.length; i++) {
      let ch = s[i];

      if (chars[ch].length === 1) {
        return chars[ch][0];
      }
    }

    return -1;
};

var firstUniqChar = function(s) {
  let letters = "abcdefghijiklmnopqrstuvwxyz"
  let res = s.length; 
  for(let c of letters) {
      let idx = s.indexOf(c);
      if (idx !== -1 && idx === s.lastIndexOf(c) && idx < res) {
          res = idx;
      }
  }
  
  return res === s.length ? -1 : res;
};

/*
Notice above how there is 2n above us. The other result is 52n. 
It's faster in leetcode because we will only go through the alphabet. 
*/
