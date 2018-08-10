/*
Given a singly linked list, determine if it is a palindrome.

Example 1:

Input: 1->2
Output: false
Example 2:

Input: 1->2->2->1
Output: true
Follow up:
Could you do it in O(n) time and O(1) space?
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (head === null || head.next === null) return true;
    
    let fast = head;
    let slow = head;
    
    while(fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    fast = head;
    slow = reverseList(slow);
    
    while(slow !== null) {
        if (fast.val !== slow.val) return false;
        fast = fast.next;
        slow = slow.next;
    }
    
    return true;
};

var reverseList = function(head) { 
    let next = null; 
    let prev = head;
    
    while(prev !== null) {
        let tmp = prev.next; 
        prev.next = next; 
        next = prev; 
        prev = tmp; 
    }
    
    return next;
}