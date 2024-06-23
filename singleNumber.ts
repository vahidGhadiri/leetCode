/**
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one
 * single-number algorithm in leet-code
 * @param nums 
 * @returns 
 */

function solutionOne(nums: number[]): number {
    let unique = 0;
    for (const num of nums) {
        unique ^= num;
    }
    return unique
}

function solutionTwo(nums: number[]): number {
    return nums.reduce((prev, val) => prev ^ val, 0)
};

function solutionThree(nums: number[]): number {
    const set = new Set<number>();
    for (let num of nums) {
        if (set.has(num)) {
            set.delete(num);
        } else {
            set.add(num);
        }
    }
    return set.values().next().value;
}