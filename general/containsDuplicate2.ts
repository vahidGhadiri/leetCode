function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const numIndexes = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        if (numIndexes.has(nums[i]) && i - numIndexes.get(nums[i])! <= k) {
            return true;
        }
        numIndexes.set(nums[i], i);
    }

    return false;
}