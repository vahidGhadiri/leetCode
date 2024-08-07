/**
 ** 242. Valid Anagram
 ** https://leetcode.com/problems/valid-anagram/description/
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false
 */

/**
 * Solution #1: Hash Map Frequency Count
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @returns boolean
 * @param s 
 * @param t 
 */
function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false
    const hashmap: Record<string, number> = {}
    for (let i = 0; i < s.length; i++) {
        hashmap[s[i]] = (hashmap[s[i]] || 0) + 1
    }
    for (let i = 0; i < t.length; i++) {
        if (!hashmap[t[i]]) {
            return false
        }
        hashmap[t[i]] -= 1;
    }
    return true
};
