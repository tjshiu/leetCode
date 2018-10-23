/*
Given a collection of distinct integers, return all possible permutations.

Example:

Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if (nums.length <= 1) return [nums];

    const last = nums.pop();
    const prev_perm = permute(nums);
    let result = [];

    prev_perm.forEach(subArr => {
        let newArr = [];
        for (let i = 0; i <= subArr.length; i++) {
            let copy = subArr.slice(0);
            copy.splice(i, 0, last)
            newArr.push(copy);
        }
        result = result.concat(newArr);
    })

    return result;
};