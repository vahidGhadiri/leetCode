function binarySearch<T>(array: T[], target: T, left: number, right: number): number {
    while (left <= right) {
        const mid = Math.floor((right + left) / 2)
        if (array[mid] === target) {
            return mid
        }
        if (array[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return -1
}


/**
 * Best Case Time Complexity: O(1)
 * Worst Case Time Complexity: O(log n)
 * Average Case Time Complexity: O(log n)
 * Space Complexity: O(1)
 * @param array 
 * @param target 
 * @returns 
 */
function exponentialSearch<T>(array: T[], target: T): number {
    if (array.length === 0) {
        return -1
    }

    if (array[0] === target) {
        return 0
    }

    let i = 1
    while (i < array.length && array[i] <= target) {
        i = i * 2
    }

    return binarySearch(array, target, Math.floor(i / 2), Math.min(i, array.length - 1))
}


