/*
Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

Example:

Input: S = "ADOBECODEBANC", T = "ABC"
Output: "BANC"
Note:

If there is no such window in S that covers all characters in T, return the empty string "".
If there is such window, you are guaranteed that there will always be only one uni
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let result = "";
    if (t.length > s.length) return result;

    let countCharsT = {};
    let counter = 0;
    for (let c of t) {
        if (countCharsT[c]) {
            countCharsT[c]++;
        } else {
            countCharsT[c] = 1;
            counter++;
        }
    }

    let beg = 0;
    let end = 0;
    let head = 0;
    let len = Infinity;
    while (end < s.length) {
        let c = s[end];

        if (countCharsT.hasOwnProperty(c)) {
            countCharsT[c]--;
            if (countCharsT[c] === 0) counter--;
        }
        end++;

        while(counter === 0) {
            let tempC = s[beg];
            if (countCharsT.hasOwnProperty(tempC)) {
                countCharsT[tempC]++;
                if (countCharsT[tempC] > 0) counter++;
            }

            if (end - beg < len) {
                len = end - beg;
                head = beg;
            }


            beg++;

        }
    }
    if (len === Infinity) return "";
    return s.substring(head, head + len)
};