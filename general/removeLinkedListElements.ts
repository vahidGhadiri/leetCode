/**
 * * 203. Remove Linked List Elements
 * * https://leetcode.com/problems/remove-linked-list-elements/description/
Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

Example 1:
Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]

Example 2:
Input: head = [], val = 1
Output: []

Example 3:
Input: head = [7,7,7,7], val = 7
Output: []
 */


class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

/**
 * Time Complexity: O()
 * Space Complexity: O()
 * @param head 
 * @param val 
 */
function removeElements(head: ListNode | null, val: number): ListNode | null {
    let res = new ListNode()
    res.next = head
    let current = res

    while (current.next !== null) {
        if (current.next.val === val) {
            current.next = current.next.next
        } else {
            current = current.next
        }
    }

    return res.next
};