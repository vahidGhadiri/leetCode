/**
 ** 448. Find All Numbers Disappeared in an Array
 ** https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/
Given an array nums of n integers where nums[i] is in the range [1, n], 
return an array of all the integers in the range [1, n] that do not appear in nums.

Example 1:
Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]

Example 2:
Input: nums = [1,1]
Output: [2]
 */


/**
 * Solution #1: Cyclic sort
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param nums 
 */
function findDisappearedNumbers(nums: number[]): number[] {
    let i = 0;
    while (i < nums.length) {
        const correctIndex = nums[i] - 1;
        if (nums[i] !== nums[correctIndex]) {
            [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
        } else {
            i++;
        }
    }

    console.log(nums)
    const result: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) {
            result.push(i + 1);
        }
    }
    return result;
}
