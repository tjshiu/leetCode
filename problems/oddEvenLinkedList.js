/*
Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.

You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

Example 1:

Input: 1->2->3->4->5->NULL
Output: 1->3->5->2->4->NULL
Example 2:

Input: 2->1->3->5->6->4->7->NULL
Output: 2->3->6->7->1->5->4->NULL
Note:

The relative order inside both the even and odd groups should remain as it was in the input.
The first node is considered odd, the second node even and so on ...
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
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    let odd = new ListNode(null);
    let even = new ListNode(null);
    let oddHead = odd;
    let evenHead = even;
    let count = 1;
    let currentNode = head;

    while (currentNode) {
        if (count % 2 === 1) {
            odd.next = currentNode;
            odd = odd.next
        } else {
            even.next = currentNode
            even = even.next
        }
        currentNode = currentNode.next
        count += 1
    }
    odd.next = evenHead.next;
    even.next = null;

    return oddHead.next;
};