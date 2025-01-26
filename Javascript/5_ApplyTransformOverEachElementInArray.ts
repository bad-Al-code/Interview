function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    let result: number[] = [];
    for (let i: number = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i));
    }
    return result;
}
