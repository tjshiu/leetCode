/*
You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:

Input: J = "aA", S = "aAAbbbb"
Output: 3
Example 2:

Input: J = "z", S = "ZZ"
Output: 0
Note:

S and J will consist of letters and have length at most 50.
The characters in J are distinct.
*/

var numJewelsInStones = function(J, S) {
    let jewels = J.split("");
    let stones = S.split("");
    let count = {};
    let jewelSum = 0;

    for(let i = 0; i < jewels.length; i++) {
        let jewel = jewels[i];
        if (count[jewel] === undefined) {
            count[jewel] = 0;
        }
    }

    for(let j = 0; j < stones.length; j++) {
        let stone = stones[j];
        if (count[stone] !== undefined) {
            count[stone]++;
        }
    }

    Object.keys(count).forEach(function(key) {
      jewelSum += count[key];
    });

    return jewelSum;
};
