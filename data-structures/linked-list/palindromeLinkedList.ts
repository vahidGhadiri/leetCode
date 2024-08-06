/**
 * * 234. Palindrome Linked List
 * * https://leetcode.com/problems/palindrome-linked-list/description/
 * Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

Example 1:
Input: head = [1,2,2,1]
Output: true

Example 2:
Input: head = [1,2]
Output: false
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

/** Solution #1: In-place reversal 
 * Time complexity: O(n)
 * Space complexity: O(1)
 * @param head 
 * @returns boolean
 */
function isPalindrome(head: ListNode | null): boolean {
    if (head === null) return true;

    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast !== null && fast.next !== null) {
        slow = slow!.next;
        fast = fast.next.next;
    }

    let prev: ListNode | null = null;
    while (slow !== null) {
        let temp: ListNode | null = slow.next;
        slow.next = prev;
        prev = slow;
        slow = temp;
    }

    let firstHalf: ListNode | null = head;
    let secondHalf: ListNode | null = prev;
    while (secondHalf !== null) {
        if (firstHalf!.val !== secondHalf.val) {
            return false;
        }
        firstHalf = firstHalf!.next;
        secondHalf = secondHalf.next;
    }

    return true;
};