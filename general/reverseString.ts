/**
 ** 344. Reverse String
 ** https://leetcode.com/problems/reverse-string/description/
Write a function that reverses a string. The input string is given as an array of characters s.
You must do this by modifying the input array in-place with O(1) extra memory.

Example 1:
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
 */


/**
 * Solution #1: Two pointer
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param s 
 */
function reverseString(s: string[]): void {
    let leftPointer = 0
    let rightPointer = s.length - 1

    while (leftPointer <= rightPointer) {
        [s[leftPointer], s[rightPointer]] = [s[rightPointer], s[leftPointer]]
        leftPointer++
        rightPointer--
    }
};