/*Given a collection of numbers that might contain duplicates, return all possible unique permutations.

Example:

Input: [1,1,2]
Output:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permuteUnique = function(nums) {
    let counts = {};
    nums.reduce((accum, num) => {
        accum[num] = accum[num] ? accum[num] + 1 : 1
        return accum;
    }, counts)

    let numsSorted = Object.keys(counts).sort();
    let result = new Array(nums.length)
    let endingPermute = [];
    permutationsHelper(counts, numsSorted, result, 0, endingPermute)
    return endingPermute
};

var permutationsHelper = function(counts, sortedNums, result, level, endingPermutation) {
    if (level === result.length) {
        let copyResult = result.slice(0)
        endingPermutation.push(copyResult);
        return;
    }

    for (let i = 0; i < sortedNums.length; i++) {
        let key = sortedNums[i];
        if (counts[key] === 0) continue;
        result[level] = Number.parseInt(key);
        counts[key]--;
        permutationsHelper(counts, sortedNums, result, level + 1, endingPermutation)
        counts[key]++;
    }
}