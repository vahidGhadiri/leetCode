function quickSort(arr: number[]): number[] {
    if (arr.length <= 1) return arr

    const pivot = arr[arr.length - 1]
    const left: number[] = []
    const right: number[] = []
    const equal: number[] = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else if (arr[i] > pivot) {
            right.push(arr[i])
        } else {
            equal.push(arr[i])
        }
    }
    return [...quickSort(left), ...equal, ...quickSort(right)]
}