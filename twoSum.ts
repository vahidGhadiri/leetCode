/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
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