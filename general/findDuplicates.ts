function findDuplicates<K>(arr: K[]): K[] {
    return arr.reduce((acc: K[], current: K, index: number, array: K[]) => {
        if (array.indexOf(current) !== index && acc.indexOf(current) === -1) {
            acc.push(current);
        }
        return acc;
    }, []);
}


function findDuplicates2<K>(arr: K[]): unknown[] {
    const uniqueElements = new Set();
    const duplicates = new Set();

    for (let i = 0; i < arr.length; i++) {
        if (uniqueElements.has(arr[i])) {
            duplicates.add(arr[i]);
        } else {
            uniqueElements.add(arr[i]);
        }
    }

    return Array.from(duplicates);
}

const array = ["vahid", "vahab", "shiva", "shahab", "vahid"];

console.log("reduce method", findDuplicates(array))
console.log("loop method", findDuplicates2(array))