/**
 * * 643. Maximum Average Subarray I
 * * https://leetcode.com/problems/maximum-average-subarray-i/description/
You are given an integer array nums consisting of n elements, and an integer k.
Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

Example 1:
Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
Example 2:

Input: nums = [5], k = 1
Output: 5.00000
 */


/**
 * Solution #1 >> Sliding window
 * Time complexity: O(n)
 * Space complexity: O(1)
 * @param nums
 * @param k
 */
function findMaxAverage(nums: number[], k: number): number {
    let sum = 0
    let maxSum = 0

    for (let i = 0; i < k; i++) {
        sum += nums[i]
    }

    maxSum = sum

    for (let i = k; i < nums.length; i++) {
        sum += nums[i] - nums[i - k]
        if (sum > maxSum) {
            maxSum = sum
        }
    }
    return maxSum / 4
}