/**
 * @param names - Array of names to count.
 * @returns
 */
export function countNames(names: string[]): Map<string, number> {
    const countMap: Map<string, number> = new Map();

    for (let i = 0; i < names.length; i++) {
        if (!countMap.has(names[i])) {
            countMap.set(names[i], 1);
        } else {
            countMap.set(names[i], (countMap.get(names[i]) || 0) + 1);
        }
    }

    return countMap;
}

const names: string[] = ['aanya', 'arjun', 'vihaan', 'arjun', 'siya', 'anika'];
console.log(countNames(names));
