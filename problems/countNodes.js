/*iven a complete binary tree, count the number of nodes.

Note:

Definition of a complete binary tree from Wikipedia:
In a complete binary tree every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

Example:

Input:
    1
   / \
  2   3
 / \  /
4  5 6

Output: 6
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
 * @return {number}
 */
var countNodes = function(root) {
    if(!root) return 0;
    const left = getDepth(root.left);
    const right = getDepth(root.right);

    if(left === right) {
        return 2 ** left + countNodes(root.right);
    } else {
        return 2 ** right + countNodes(root.left);
    }
};

const getDepth = root => {
    if(!root) return 0;
    let depth = 1;
    while(root.left) {
        root = root.left;
        depth++;
    }

    return depth;
}

var countNodes = function(root) {
    if (!root) return 0;
    let count = 1;
    if (root.left) {
        count += countNodes(root.left)
    }
    if (root.right) {
        count += countNodes(root.right);
    }

    return count;
};