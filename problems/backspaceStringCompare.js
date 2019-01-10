/*Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

Example 1:

Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".
Example 2:

Input: S = "ab##", T = "c#d#"
Output: true
Explanation: Both S and T become "".
Example 3:

Input: S = "a##c", T = "#a#c"
Output: true
Explanation: Both S and T become "c".
Example 4:

Input: S = "a#c", T = "b"
Output: false
Explanation: S becomes "c" while T becomes "b".
*/

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    let i1 = S.length - 1;
    let i2 = T.length - 1;

    while (i1 >= 0 || i2 >= 0) {
        i1 = backspace(S, i1);
        i2 = backspace(T, i2);

        if (S[i1] !== T[i2]) return false;
        i1 -= 1;
        i2 -= 1;
    }

    return i1 <= -1 && i2 <= -1;
};

var backspace = function(word, index) {
    let backspaces = 0;
    while ((word[index] === "#" || backspaces) && index >= 0) {
        if (word[index] === "#") {
            backspaces += 1;
        } else {
            backspaces -= 1
        }

        index -= 1;
    }

    return index;
}
