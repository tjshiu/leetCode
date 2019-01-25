/*
Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
Example 1:

Input:
    2
   / \
  1   3
Output: true
Example 2:

    5
   / \
  1   4
     / \
    3   6
Output: false
Explanation: The input is: [5,1,4,null,null,3,6]. The root node's value
             is 5 but its right child's value is 4.
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
 * @return {boolean}
 */
var isValidBST = function(root) {
    var arr = []
    function inorder(root) {
      if (!root) return;
      inorder(root.left)
      arr.push(root.val)
      inorder(root.right)
    }
    inorder(root)
    for (var i = 0; i < arr.length - 1; i++) {
      if (arr[i] >= arr[i + 1]) return false
    }
    return true
  };

  const isValidBST = root => {
    const helper = (node, lo, hi) => {
      if (!node) return true;
      return (lo < node.val && node.val < hi) &&
        helper(node.left, lo, node.val) &&
        helper(node.right, node.val, hi);
    }
    return helper(root, -Infinity, Infinity);
  };

  var isValidBST = function(root) {
    let stack = [];
    let pre = null;
    let curr = root;
    while (curr || stack.length > 0) {
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        if (pre && pre.val >= curr.val) return false;
        pre = curr;
        curr = curr.right;
    }
    return true;
};