const findPairEyes = (arr1: number[], arr2: number[]) => {
    let res: number = 0
    // let i: number = 0
    // let j: number = 0
    let temp: number[] = []

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                if (!temp.includes(arr1[i])) {
                    temp.push(arr1[i])
                    res++
                }
            }
        }
    }

    // while (i < arr1.length && j < arr2.length) {
    //     if (arr1[i] === arr2[j]) {
    //         res++
    //     }
    //     i++
    //     j++
    // }
    return res
}

const arr1 = [1, 1, 0, 1, 0, 0, 1, 1]
const arr2 = [1, 1, 0, 1, 0, 0, 0, 1]

console.log(findPairEyes(arr1, arr2))

