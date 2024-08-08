/**
 ** 283. Move Zeroes
 ** https://leetcode.com/problems/move-zeroes/description/
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.

Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 */

/**
 Do not return anything, modify nums in-place instead.
 */

/**
 * Solution #1: Two pointer technique
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param nums 
 */
function moveZeroes(nums: number[]): void {
    let left = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[left], nums[i]] = [nums[i], nums[left]]
            left++
        }
    }
};

const nums = [0, 1, 0, 0]
moveZeroes(nums)