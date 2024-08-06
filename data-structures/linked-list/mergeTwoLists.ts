/**
 * You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.

Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:
Input: list1 = [], list2 = []
Output: []

Example 3:
Input: list1 = [], list2 = [0]
Output: [0]

 
 */


class ListNode {
    value: number
    next: ListNode | null
    constructor(value?: number, next?: ListNode | null) {
        this.value = (value === undefined ? 0 : value)
        this.next = (next === undefined ? null : next)
    }
}

const mergeTwoSortedLists = (list1: ListNode | null, list2: ListNode | null): ListNode | null => {
    let newHead = new ListNode()
    let pointer = newHead

    while (list1 !== null && list2 !== null) {
        if (list1.value <= list2.value) {
            pointer.next = list1
            list1 = list1.next
        } else {
            pointer.next = list2
            list2 = list2.next
        }
        pointer = pointer.next
    }

    if (list1 !== null) pointer.next = list1
    if (list2 !== null) pointer.next = list2

    return newHead.next
}