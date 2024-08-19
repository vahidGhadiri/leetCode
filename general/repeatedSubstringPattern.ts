/**
 * 459. Repeated Substring Pattern
Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.

Example 1:
Input: s = "abab"
Output: true
Explanation: It is the substring "ab" twice.

Example 2:
Input: s = "aba"
Output: false

Example 3:
Input: s = "abcabcabcabc"
Output: true
Explanation: It is the substring "abc" four times or the substring "abcabc" twice.
 */


/**
 * Solution #1: String manipulation
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param s 
 */
function repeatedSubstringPattern(s: string): boolean {
    const ss = (s + s).slice(1, -1);
    return ss.includes(s);
};