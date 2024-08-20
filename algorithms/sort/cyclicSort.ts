function cyclicSort(arr: number[]): void {
    let i = 0
    while (i < arr.length) {
        const correctIndex = arr[i] - 1
        if (arr[i] !== arr[correctIndex]) {
            [arr[i], correctIndex[i]] = [correctIndex[i], arr[i]]
        } else {
            i++
        }
    }
}