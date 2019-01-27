/*A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).

Write a function to determine if a number is strobogrammatic. The number is represented as a string.

Example 1:

Input:  "69"
Output: true
Example 2:

Input:  "88"
Output: true
Example 3:

Input:  "962"
Output: false
*/

var isStrobogrammatic = function(num) {
    let start = 0;
    let end = num.length - 1;
    let matches = { "1" : "1",
                   "6" : "9",
                   "9" : "6",
                   "8" : "8",
                   "0" : "0"
                  };

    while (start <= end) {
        let beg = num[start];
        let ending = num[end];
        if (!matches.hasOwnProperty(beg)) return false;
        if (matches[beg] !== ending) return false;
        start++;
        end--;
    }
    return true;
};