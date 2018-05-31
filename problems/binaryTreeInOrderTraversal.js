/*
Given a binary tree, return the inorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,3,2]
Follow up: Recursive solution is trivial, could you do it iteratively?
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = function(root) {
  let result = [];
  let stack = [];
  let current = root; // root obj
  while(current !== null || stack.length !== 0) {
    while (current !== null) {
      stack.push(current); // [root], [2], [2, 3]
      current = current.left; // null, {3}, null
    }
    current = stack.pop(); // root, {3}, {2}
    result.push(current.val); // [1], [1, 3], [1, 3, 2]
    current = current.right; // {2}, null, null
  }

  return result; // [1, 3, 2]
};
