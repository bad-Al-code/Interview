function countBits(n: number): number[] {
    const hMap: Map<number, { binaryRepresentation: string; count: number }> =
        new Map();
    const result: number[] = [];

    for (let i = 0; i <= n; i++) {
        const binaryRepresentation = i.toString(2);
        const count = binaryRepresentation.split('1').length - 1;
        hMap.set(i, { binaryRepresentation, count });
        result.push(count);
    }

    console.log(hMap);

    return result;
}

console.log(countBits(100));
