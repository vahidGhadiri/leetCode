function map<T, K>(arr: T[], fn: (item: T, index: number) => K): K[] {
    let res: K[] = [];
    arr.forEach((item, index) => {
        res.push(fn(item, index));
    });
    return res;
}