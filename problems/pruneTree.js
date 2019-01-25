/*We are given the head node root of a binary tree, where additionally every node's value is either a 0 or a 1.

Return the same tree where every subtree (of the given tree) not containing a 1 has been removed.

(Recall that the subtree of a node X is X, plus every node that is a descendant of X.)

Example 1:
Input: [1,null,0,0,1]
Output: [1,null,0,null,1]

Explanation:
Only the red nodes satisfy the property "every subtree not containing a 1".
The diagram on the right represents the answer.


Example 2:
Input: [1,0,1,0,0,0,1]
Output: [1,null,1,null,1]



Example 3:
Input: [1,1,0,1,1,0,1,0]
Output: [1,1,0,1,1,null,1]

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
 * @return {TreeNode}
 */
var pruneTree = function(root) {
    if (!root) return root;
    if (!hasOne(root)) return null;

    if (root.left) root.left = pruneTree(root.left);
    if (root.right) root.right = pruneTree(root.right);

    return root;
};

var hasOne = function(root) {
    if (!root) return false;
    if (root.val === 1) return true;
    let left = hasOne(root.left);
    let right = hasOne(root.right);

    return left || right;
}

var pruneTree = function(root) {
    if (!root) return root;
    let left = pruneTree(root.left)
    let right = pruneTree(root.right);
    if (!left) root.left = null;
    if (!right) root.right = null;
    if (!left && !right && !root.val) return null;
    return root;
};