/**
 ** 412. Fizz Buzz
 ** https://leetcode.com/problems/fizz-buzz/description/
Given an integer n, return a string array answer (1-indexed) where:
answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.
 
Example 1:
Input: n = 3
Output: ["1","2","Fizz"]

Example 2:
Input: n = 5
Output: ["1","2","Fizz","4","Buzz"]

Example 3:
Input: n = 15
Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
 */


/**
 * Solution #1: Iterative
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param n 
 */
function fizzBuzz(n: number): string[] {
    const ans: string[] = []

    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            ans.push("FizzBuzz")
        } else if (i % 3 === 0) {
            ans.push("Fizz")
        } else if (i % 5 === 0) {
            ans.push("Buzz")
        } else {
            ans.push(i.toString())
        }
    }

    return ans
};


/**
 * Solution #2: Hashmap
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param n
 * @returns
 */
function fizzBuzz2(n: number): string[] {
    const ans: string[] = []

    const hashMap = new Map<number, string>()
    hashMap.set(3, "Fizz")
    hashMap.set(5, "Buzz")

    for (let i = 1; i <= n; i++) {
        let temp = ''
        for (const [key, value] of hashMap) {

            console.log(key, value)
            if (i % key === 0) {
                temp += value
            }
        }
        ans.push(temp || i.toString())
    }

    return ans
}

fizzBuzz2(12)