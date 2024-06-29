/**
 * Given an integer x, return true if x is a palindrome, and false otherwise.
 * An integer is a palindrome when it reads the same forward and backward.For example, 121 is a palindrome while 123 is not.
 * @param x 
 * @returns Boolean
 */
function isPalindrome(x: number): boolean {
    // Special cases:
    // 1. Negative numbers are not palindromes
    // 2. Numbers ending in zero (except zero itself) are not palindromes
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }

    let reversedNumber = 0;
    let originalNumber = x;
    let loop = 0
    while (x > 0) {
        // Extract the last digit of x
        const lastDigit = x % 10;
        console.log('lastDigits', lastDigit)
        // Build the reversed number
        reversedNumber = reversedNumber * 10 + lastDigit;
        console.log('reversedNumber', reversedNumber)
        // Remove the last digit from x
        x = Math.floor(x / 10);
        console.log('x', x)
        console.log(x)
        loop++
        console.log('**************************** loop ****************************', loop)
    }

    // After reversing, compare the original number with the reversed number
    return originalNumber === reversedNumber;
}


isPalindrome(323)