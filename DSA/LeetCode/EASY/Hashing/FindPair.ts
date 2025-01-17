/**
 * Finds two pairs in an array such that a + b = c + d.
 * @param arr - Array of distinct integers.
 * @return An array containing two pairs [[a, b], [c, d]] if found, else an empty array.
 */
function findPair(arr: number[]): [number, number][] {
    const map = new Map<number, [number, number]>();

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            const sum = arr[i] + arr[j];

            if (map.has(sum)) {
                const firstPair = map.get(sum)!;
                const secondPair: [number, number] = [arr[i], arr[j]];
                return [firstPair, secondPair];
            }

            map.set(sum, [arr[i], arr[j]]);
        }
    }

    return [];
}

const my_list = [3, 4, 7, 1, 12, 9];
console.log(findPair(my_list));
