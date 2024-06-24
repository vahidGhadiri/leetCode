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