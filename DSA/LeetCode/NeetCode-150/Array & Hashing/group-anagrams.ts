function groupAnagrams(strs: string[]): string[][] {
    if (strs.length === 0) return [];

    const anagramMap = new Map<string, string[]>();

    for (const str of strs) {
        const key = buildFreqKey(str);
        console.log(key);

        if (!anagramMap.has(key)) {
            anagramMap.set(key, []);
        }

        anagramMap.get(key)!.push(str);
    }

    return Array.from(anagramMap.values());
}

function buildFreqKey(str: string): string {
    const counts = new Array<number>(26).fill(0);
    const base = 'a'.charCodeAt(0);

    for (const char of str) counts[char.charCodeAt(0) - base]++;

    counts.every((count) => console.log(count));

    return counts.join('#');
}

const strs = ['bdddddddddd', 'bbbbbbbbbbc'];
console.log(groupAnagrams(strs));
