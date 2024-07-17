function merge(left: number[], right: number[]): number[] {
    let resultArray: number[] = [], leftIndex = 0, rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return resultArray
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
}

const mergeSort = (unsortedArray: number[]): number[] => {
    if (unsortedArray.length <= 1) return unsortedArray

    const middle = Math.floor(unsortedArray.length / 2)
    const left = unsortedArray.slice(0, middle)
    const right = unsortedArray.slice(middle)


    return merge(mergeSort(left), mergeSort(right))
}

const unsortedArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log(mergeSort(unsortedArray));

// TimeComplexity => O(nLogn)
// SpaceComplexity => O(n)