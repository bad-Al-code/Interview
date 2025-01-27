type Fn = (n: number, i: number) => any;

function filter(arr: number[], fn: Fn): number[] {
    const res: number[] = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            res.push(arr[i]);
        }
    }

    return res;
}

function filter2(arr: number[], fn: Fn): number[] {
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            arr[index] = arr[i];
            index++;
        }
    }

    return arr.slice(0, index);
}
