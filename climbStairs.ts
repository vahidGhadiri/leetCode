/**
 * You are climbing a staircase. It takes n steps to reach the top.
    Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 * @param n 
 * @returns 
 */

function climbStairs(n: number): number {
    if (n === 1) return 1;

    let ways: number[] = new Array(n + 1);
    ways[1] = 1;
    ways[2] = 2;

    for (let i = 3; i <= n; i++) {
        ways[i] = ways[i - 1] + ways[i - 2];
    }

    return ways[n];
}
// TimeComplexity: O(n)
// SpaceComplexity: O(n)


//solution2
function climbStairs_2(n) {
    if (n === 1) return 1
    if (n === 2) return 2

    return climbStairs_2(n - 1) + climbStairs_2(n - 2)
}
// TimeComplexity: O(2n)
// SpaceComplexity: O(n)

//Solution 3
function climbStairs_3(n: number): number {
    if (n <= 2) return n

    let first = 1
    let sec = 2

    for (let i = 3; i <= n; i++) {
        let third = sec + first
        first = sec
        sec = third
    }

    return sec
}
// TimeComplexity: O(n)
// SpaceComplexity: O(1)


//There is another solution with matrix exponentiation 
// learn it and resolve it as soon as possible 
