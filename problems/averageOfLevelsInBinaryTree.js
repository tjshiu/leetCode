/*
Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.
Example 1:
Input:
    3
   / \
  9  20
    /  \
   15   7
Output: [3, 14.5, 11]
Explanation:
The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].
Note:
The range of node's value is in the range of 32-bit signed integer.
*/


// DFS approach
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
var averageOfLevels = function(root) {
    let res = [];
    let count = [];

    average(root, 0, res, count);
    for (let i = 0;i < res.length; i++) {
      res[i] = res[i] / count[i];
    }

    return res;
};

function average(node, i, sum, count) {
  if (node === null) return;

  if (i < sum.length) {
    sum[i] += node.val;
    count[i] += 1;
  } else {
    sum[i] = node.val;
    count[i] = 1;
  }

  average(node.left, i + 1, sum, count);
  average(node.right, i + 1, sum, count);
}

// BFS Solution
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
var averageOfLevels = function(root) {
  let res = [];
  let queue = [root];

  while(queue.length !== 0) {
    let sum = 0, count = 0;
    let children = [];
    while(queue.length !== 0) {
      let node = queue.shift();
      sum += node.val;
      count++;
      if (node.left !== null) {
        children.push(node.left);
      }
      if (node.right !== null) {
        children.push(node.right);
      }
    }

    queue = children;
    res.push(sum / count);
  }

  return res;
};
