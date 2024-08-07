/**
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, 
 * it reads the same forward and backward. Alphanumeric characters include letters and numbers.
Given a string s, return true if it is a palindrome, or false otherwise.
 * @param s 
 * @returns 
 */

// solution 1
function isPalindrome(s: string): boolean {
    const cleanedString = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedString = cleanedString.split('').reverse().join('');

    return cleanedString === reversedString;
};
// TimeComplexity: O(n)
// TimeComplexity: O(n)


// solution 2
function isPalindrome2(s: string) {
    const word = s.split("")
    let reversedWord = ""

    while (word.length > 0) {
        reversedWord += word.pop()
    }

    return reversedWord === s
}

// TimeComplexity: O(n)
// TimeComplexity: O(n)


// Solution 3
function isPalindrome3(s: string): boolean {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

// TimeComplexity: O(n)
// SpaceComplexity: O(1)
