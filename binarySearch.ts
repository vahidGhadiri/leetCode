const binarySearch = (arr: number[], targetValue: number): number => {
    let lowPointer = 0
    let highPointer = arr.length - 1


    while (lowPointer <= highPointer) {
        let mid = Math.floor((lowPointer + highPointer) / 2)
        if (arr[mid] === targetValue) {
            return mid
        } else if (arr[mid] < targetValue) {
            lowPointer = mid + 1
        } else {
            highPointer = mid - 1
        }
    }

    return -1
}