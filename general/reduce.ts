
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
