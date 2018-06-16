/*

Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

Example:

Given the sorted array: [-10,-3,0,5,9],

One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

      0
     / \
   -3   9
   /   /
 -10  5

 */

 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (nums.length === 0) return null;
    let middle = Math.floor(nums.length / 2);

    let node = new TreeNode(nums[middle]);
    node.left = sortedArrayToBST(nums.slice(0, middle));
    node.right = sortedArrayToBST(nums.slice(middle + 1, nums.length));

    return node;
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
