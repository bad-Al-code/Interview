/**
 * Finds all repreated DNA sequences of length `k` in the input string `s`.
 *
 * @param {string} s - input string representating a DNA sequence
 * @param {number} k - length of sequnces that we are looking for
 * @returns {string[]} array of all repreated sequences of length `k`. Returns emprty rray if none are found
 *
 * @example
 * const s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT";
 * const k = 10;
 * const result = findRepeatedDnaSequences(s, k);
 * console.log(result); // Outputs: ["AAAAACCCCC", "CCCCCAAAAA"]
 *
 * @logic
 * This function uses a rolling hash technique to efficiently detect repeated sequences:
 * 1. Map DNA characters ('A', 'C', 'G', 'T') to numerical values.
 * 2. Convert the DNA string to an array of numbers.
 * 3. Use a rolling hash to calculate hash values for sequences of length `k`.
 * 4. Store hash values in a set and check for duplicates.
 *
 * @timeComplexity O(n) - Single traversal of the input string with efficient hash operations.
 * @spaceComplexity O(n) - Space used for hash sets and numeric representation of the string.
 */
function findRepeatedDnaSequences(s: string, k: number): string[] {
    const n: number = s.length;

    if (n < k) {
        return [];
    }

    const mapping: Map<string, number> = new Map([
        ['A', 1],
        ['C', 2],
        ['G', 3],
        ['T', 4],
    ]);

    const numbers: number[] = new Array(n);

    for (let i = 0; i < n; i++) {
        numbers[i] = mapping.get(s[i])!;
    }

    const a: number = 10;
    let hashValue: number = 0;
    const hashSet: Set<number> = new Set();
    const output: Set<string> = new Set();

    for (let i = 0; i <= n - k + 1; i++) {
        if (i === 0) {
            for (let j = 0; j < k; j++) {
                hashValue += numbers[j] * Math.pow(a, k - j - 1);
            }
        } else {
            const previousHashValue = hashValue;
            hashValue =
                (previousHashValue - numbers[i - 1] * Math.pow(a, k - 1)) * a +
                numbers[i + k - 1];
        }

        if (hashSet.has(hashValue)) {
            output.add(s.substring(i, i + k));
        }

        hashSet.add(hashValue);
    }

    return Array.from(output);
}

const dna = 'AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT';
const k = 10;
console.log(findRepeatedDnaSequences(dna, k));
