/**
 * Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:
Input: nums = [3,2,3]
Output: 3

Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2
 */

function majorityElement(nums: number[]): number {
    let res: number = 0
    let count: number = 0

    for (let i = 0; i < nums.length; i++) {
        if (count === 0) res = nums[i]

        count += (nums[i] === res) ? 1 : -1
    }
    return res
};

// Description: Boyer-moore approach
// Time complexity: O(n)
// Space complexity: O(1)