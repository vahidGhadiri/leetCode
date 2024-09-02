
const reduce = <T, U>(arr: T[], fn: (acc: U, curr: T, index: number, arr: T[]) => U, initialValue: U): U => {
    let accumulator: U = initialValue
    for (let i = 0; i < arr.length; i++) {
        accumulator = fn(accumulator, arr[i], i, arr)
    }
    return accumulator
}


const numbers = [1, 2, 3, 4, 5];
const sum = reduce(numbers, (acc, curr) => acc + curr, 0);
console.log(sum);

// interface Array<T> {
//     myReduce<U>(
//         fn: (acc: U, curr: T, index: number, arr: T[]) => U,
//         initialValue?: U
//     ): U;
// }

// Array.prototype.myReduce = function <T, U>(
//     fn: (acc: U, curr: T, index: number, arr: T[]) => U,
//     initialValue?: U
// ): U {
//     if (this.length === 0 && initialValue === undefined) throw new TypeError('Reduce of empty array with no initial value')
//     if (this.length === 0 && initialValue !== undefined) return initialValue;

//     let accumulator: U;

//     if (initialValue === undefined) {
//         accumulator = this[0] as unknown as U;
//         for (let i = 1; i < this.length; i++) {
//             accumulator = fn(accumulator, this[i], i, this);
//         }
//     } else {
//         accumulator = initialValue;
//         for (let i = 0; i < this.length; i++) {
//             accumulator = fn(accumulator, this[i], i, this);
//         }
//     }

//     return accumulator;
// };



interface Array<T> {
    myReduce<U>(
        fn: (
            acc: U,
            curr: T,
            index: number,
            arr: T[]
        ) => U,
        initialValue?: U
    ): U
}

Array.prototype.reduce = function <T, U>(
    fn: (acc: U, curr: T, index: number, arr: T[]) => U,
    initialValue?: U
): U {
    if (this.length === 0 && initialValue === undefined) throw new TypeError("12312")
    if (this.length === 0 && initialValue !== undefined) throw new TypeError("1231sadasd3r")

    let accumulator: U;
    if (initialValue === undefined) {
        accumulator = this[0] as unknown as U
        for (let i = 1; i < this.length; i++) {
            accumulator = fn(accumulator, this[i], i, this)
        }
    } else {
        accumulator = initialValue
        for (let i = 0; i < this.length; i++) {
            accumulator = fn(accumulator, this[i], i, this)
        }
    }
    return accumulator
}