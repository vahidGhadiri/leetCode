/**
 * * 1. Two Sum
 * * https://leetcode.com/problems/two-sum/description/
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

/**
 * Solution #1 >> Using hashmap
 * Time complexity: O(n)
 * Space complexity: O(n)
 * @param numbers 
 * @param target 
 * @returns 
 */
function twoSum(numbers: number[], target: number): number[] {
    const hashMap = new Map()
    for (let i = 0; i < numbers.length; i++) {
        let diff = target - numbers[i]
        if (hashMap.has(diff)) {
            const ans = [hashMap.get(diff), i]
            return ans
        }
        hashMap.set(numbers[i], i)
    }
    return []
}

/**
 * Solution #1 >> Using two-pointers
 * Time complexity: O(nLogN)
 * Space complexity: O(n)
 * @param numbers 
 * @param target 
 * @returns 
 */
function twoSum2(numbers: number[], target: number): number[] {
    const indexedNumbers = numbers
        .map((value, index) => ({ value, index }))
        .sort((a, b) => a.value - b.value);

    let left = 0;
    let right = indexedNumbers.length - 1;

    while (left < right) {
        const sum = indexedNumbers[left].value + indexedNumbers[right].value;
        if (sum === target) {
            return [indexedNumbers[left].index, indexedNumbers[right].index];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return [];
}