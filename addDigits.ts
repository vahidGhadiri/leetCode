/** 
 * * 258. Add Digits
 * * https://leetcode.com/problems/add-digits/description/
 * Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

Example 1:
Input: num = 38
Output: 2
Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2 
Since 2 has only one digit, return it.

Example 2:
Input: num = 0
Output: 0

*/





/**
 * Solution #1: Iteration
 * Time Complexity: O(n)
 * Space Complexity: O(logN)
 * @param num 
 * @returns 
 */
function addDigits(num: number): number {
    while (num >= 10) {
        let sum = 0
        let temp = num.toString().split("")
        for (let i = 0; i < temp.length; i++) {
            sum += Number(temp[i])
        }
        num = sum
    }
    return num
}

