function filter<T>(arr: T[], fn: (value: T, index: number, arr: T[]) => boolean): T[] {
    const result: T[] = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
}

