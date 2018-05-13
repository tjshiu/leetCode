/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

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

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let newList = [];
    let num; 
    let carry = false;
    let l1child = l1;
    let l2child = l2;
    
    while(l1child !== null || l2child !== null) {
        l1childval = l1child === null ? 0 : l1child.val
        l2childval = l2child === null ? 0 : l2child.val
        num = carry ? (l1childval + l2childval + 1) : (l1childval + l2childval)
        if (num >= 10) {
            carry = true;
            num = num - 10;
        } else {
            carry = false;
        }
        newList.push(num);
        l1child = l1child ? l1child.next : null;
        l2child = l2child ? l2child.next : null;
    }
    
    if (carry) {
        newList.push(1);
    }
    
    return newList ;
};