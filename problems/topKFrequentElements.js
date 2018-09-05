/*
Given a non-empty array of integers, return the k most frequent elements.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
Note:

You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
    let count = {};
    let result = [];
    let bucket = new Array(nums.length + 1).fill().map(() => new Array(0));
    
    for (let n of nums) {
        count[n] = count[n] ? count[n] + 1 : 1
    }
    
    for(let num in count) {
        bucket[count[num]].push(Number.parseInt(num));
    }
    
    for(let i = bucket.length - 1; i >= 0 && k > 0; i--) {
        if (bucket[i].length > 0) {
            result = result.concat(bucket[i].slice(0, k + 1));
            k -= bucket[i].length
        }
    }

    return result;
};

