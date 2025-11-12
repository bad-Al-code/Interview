/**
 * Checks if two strings are anagrams using a fixed-size array of length 26.
 * @param s - First string.
 * @param string} t - Second string.
 * @returns True if s and t are anagrams, false otherwise.
 *
 * @complexity
 * Time: O(n) — single pass through both strings.
 * Space: O(1) — uses a constant-size array of 26.
 */
function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const counts: number[] = new Array(26).fill(0);
    const base = 'a'.charCodeAt(0);

    for (let i = 0; i < s.length; i++) {
        counts[s.charCodeAt(i) - base]++;
        counts[t.charCodeAt(i) - base]--;
    }

    return counts.every((count) => count === 0);
}

/**
 * Checks if two strins are anagrams using sorting.
 * @param s The first string
 * @param t The second string
 * @returns True, if s and t are anagrams, false otherwise.
 *
 * @complexity
 * Time: O(nlogn), due to sorting both strings.
 * Space: O(n), for the sorted arrays or strings.
 */
function isAnagramUsingSorting(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const sortedS = s.split('').sort().join('');
    const sortedT = t.split('').sort().join('');

    return sortedS === sortedT;
}

console.log(isAnagramUsingSorting('anagram', 'nagaram'));
console.log(isAnagramUsingSorting('rat', 'car'));
