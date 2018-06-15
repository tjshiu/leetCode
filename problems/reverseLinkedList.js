/*
Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?
*/

// /**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
// var reverseList = function(head) {
//     if (!head) return [];
//
//     let next = head.next;
//     let current = head;
//     current.next = null;
//
//     while (next !== null) {
//         let newNext = next.next;
//         next.next = current;
//         current = next;
//         next = newNext;
//     }
//
//     return current;
// };

var reverseList = function(head) {
  let prev = null;
  let curr = head;

  while (curr !== null) {
    let nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }

  return prev;
};

var reverseListRecursive = function(head) {
  if (head === null || head.next === null) return head;

  let p = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return p;
};
