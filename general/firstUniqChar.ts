/**
 ** 387. First Unique Character in a String
 ** https://leetcode.com/problems/first-unique-character-in-a-string/description/
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

Example 1:
Input: s = "leetcode"
Output: 0

Example 2:
Input: s = "loveleetcode"
Output: 2

Example 3:
Input: s = "aabb"
Output: -1
 */

/**
 * Solution #1: Hashmap 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param s 
 */
function firstUniqChar(s: string): number {
    let hashMap: { [key: string]: number } = {}

    for (const char of s) {
        hashMap[char] = (hashMap[char] || 0) + 1
    }

    for (let i = 0; i < s.length; i++) {
        if (hashMap[s[i]] === 1) {
            return i
        }
    }
    return -1
};