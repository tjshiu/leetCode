/* Write a function that takes a string as input and returns the string reversed.

Example:
Given s = "hello", return "olleh".
*/

/**
 * @param {string} s
 * @return {string}
 */
const reverseString = function(s) {
    let chars = s.split("");
    for (let i = 0; i < Math.floor(chars.length / 2); i++) {
        [chars[i], chars[chars.length - 1 - i]] = [chars[chars.length - 1 - i], chars[i]];
    }

    return chars.join("");
};

/*
One liner
const reverseString = function(s) {
  return s.split("").reverse().join("");
}
*/
