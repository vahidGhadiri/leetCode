/**
 * Find the first duplicated character
 * @param str 
 * @returns 
 */

const firstNotDuplicatedChar = (str: string) => {
    let res = {}

    for (const char of str) {
        res[char] = (res[char] || 0) + 1
    }

    for (const char of str) {
        if (res[char] === 1) {
            return char
        }
    }
}

// Time Complexity: O(n)
// Space Complexity: O(n)