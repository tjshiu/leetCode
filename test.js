/*
You are given two non-empty linked lists representing two non-negative integers. The digits are
stored in reverse order and each of their nodes contain a single digit. Add the two numbers and
return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.

 * Definition for singly-linked list.
    function ListNode(val) {
     this.val = val;
     this.next = null;
    return this;
    }
*/

// var addTwoNumbers = function(l1, l2) {
//     let currNode = new ListNode(null);
//     let head = currNode;
//     let carry = 0;

//     while (l1 || l2) {
//         let l1val = l1 ? l1.val : 0;
//         let l2val = l2 ? l2.val : 0;
//         let val = l1val + l2val + carry;

//         val = val % 10;
//         carry = Math.floor(val / 10)

//         currNode.next = new ListNode(val);
//         currNode = currNode.next;
//         l1 = l1 ? l1.next : null;
//         l2 = l2 ? l2.next : null;
//     }

//     if (carry) currNode.next = new ListNode(val);

//     return head;
// }

/*
Given a non-empty binary tree, return the average value of the nodes on each level in the
form of an array.

Example 1:
Input:
    3
   / \
  9  20
    /  \
   15   7
Output: [3, 14.5, 11]
Explanation:
The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11.
Hence return [3, 14.5, 11].

Note:
The range of node's value is in the range of 32-bit signed integer.
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

// var averageOfLevels = function(root) {
//     let curr = [root]
//     let average = [];

//     while (curr.length > 0) {
//         let children = [];
//         let sum = curr.reduce((accum, node) => {
//             return accum + node.val
//         }, 0);
//         let count = curr.length;
//         average.push(sum / count);
//         for (let i = 0; i < curr.length; i++) {
//             let node = curr[i];
//             if (node.left) children.push(node.left);
//             if (node.right) children.push(node.right);
//         }

//         curr = children;
//     }

//     return average;
// }

/*
Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell
one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:

Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.
Example 2:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
*/

// var maxProfit = function(prices) {
//     if (prices.length <= 1) return 0;
//     let minPrice = prices[0];
//     let maxProfit = 0;
//     for (let i = 0; i < prices.length; i++) {
//         let currPrice = prices[i];
//         if (currPrice < minPrice) minPrice = currPrice;
//         let currSale = currPrice - minPrice;
//         if (currSale > maxProfit) maxProfit = currSale;
//     }

//     return maxProfit;
// }

// console.log(maxProfit([7,1,5,3,6,4]));
// console.log(maxProfit([7,6,4,3,1]));

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
    let curr = [root];
    let values = [];

    while (curr.length) {

    }
}