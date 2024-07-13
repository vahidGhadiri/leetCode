/**
 * Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Example 2:
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1

 * @param arr 
 * @param targetValue 
 * @returns 
 */

const binarySearch = (arr: number[], targetValue: number): number => {
    let lowPointer = 0
    let highPointer = arr.length - 1


    while (lowPointer <= highPointer) {
        let mid = Math.floor((lowPointer + highPointer) / 2)
        if (arr[mid] === targetValue) {
            return mid
        } else if (arr[mid] < targetValue) {
            lowPointer = mid + 1
        } else {
            highPointer = mid - 1
        }
    }

    return -1
}

// Time complexity: O(logn)
// Space complexity: O(1)


const recursiveBinarySearch = (arr: number[], targeValue: number, low: number, high: number): number => {
    if (low > high) {
        return -1
    }

    let mid = Math.floor((low + high) / 2)

    if (arr[mid] === targeValue) {
        return arr[mid]
    } else if (arr[mid] < targeValue) {
        return recursiveBinarySearch(arr, targeValue, mid + 1, high)
    } else {
        return recursiveBinarySearch(arr, targeValue, low, mid - 1)
    }
}

// Time complexity: O(logn)
// Space complexity: O(logn)