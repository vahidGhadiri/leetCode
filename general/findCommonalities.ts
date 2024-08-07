/**
 * Find commonalities between two arrays
 * @param arr1 
 * @param arr2 
 * @returns Array of common elements between arr1 and arr2
 */
const findCommonalities = (arr1: number[], arr2: number[]): number[] => {
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);

    let i = 0;
    let j = 0;
    const res: number[] = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] === arr2[j]) {
            res.push(arr1[i]);
            i++;
            j++;
        } else if (arr1[i] < arr2[j]) {
            i++;
        } else {
            j++;
        }
    }

    return res;
}
