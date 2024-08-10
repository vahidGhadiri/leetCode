/*
* 349. Intersection of Two Arrays
* https://leetcode.com/problems/intersection-of-two-arrays/
Given two integer arrays nums1 and nums2, return an array of their intersection
Each element in the result must be unique and you may return the result in any order.

Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]

Example 2:
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
 */

/**
 * Solution #1: Two pointer
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param nums1 
 * @param nums2 
 */
function intersection(nums1: number[], nums2: number[]): number[] {
    nums1.sort((a, b) => a - b)
    nums2.sort((a, b) => a - b)

    const ans: number[] = []
    let i = 0
    let j = 0

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            if (ans.length === 0 || ans[ans.length - 1] !== nums1[i]) {
                ans.push(nums1[i])
            }
            i++
            j++
        } else if (nums1[i] < nums2[j]) {
            i++
        } else {
            j++
        }
    }
    return ans
}


/**
 * Solution #2 :  Hashmap
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param nums1 
 * @param nums2 
 */
function intersection2(nums1: number[], nums2: number[]): number[] {
    let set1 = new Set<number>(nums1)
    let ans = new Set<number>()

    for (let num of nums2) {
        if (set1.has(num)) {
            ans.add(num)
        }
    }

    return Array.from(ans)
}