/*Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return [];
    let levels = [[root.val]]
    let queue = [root];
    while(queue.length > 0) {
        let children = [];
        while (queue.length > 0) {
            let parent = queue.shift();
            if (parent.left) children.push(parent.left);
            if (parent.right) children.push(parent.right);
        }   
        
        queue = children;
        if (children.length > 0) {
            let nextLevel = [];
            for (let i = 0; i < children.length; i++) {
                nextLevel.push(children[i].val)
            }
            levels.push(nextLevel);
        }
    }
    
    return levels;
};