function findSymetric(list: [number, number][]): [number, number][] {
    const result: [number, number][] = [];
    const map: Map<number, number> = new Map();

    for (const [a, b] of list) {
        if (map.has(b) && map.get(b) === a) {
            result.push([b, a]);
        } else {
            map.set(a, b);
        }
    }

    return result;
}

console.log(
    findSymetric([
        [1, 2],
        [3, 4],
        [2, 1],
        [4, 3],
        [5, 6],
    ]),
);
