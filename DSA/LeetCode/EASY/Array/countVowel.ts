function countSubstrings(s: string, k: number): number {
    function hasAllVowels(counts: Record<string, number>): boolean {
        return 'aeiou'.split('').every((vowel) => counts[vowel] > 0);
    }

    function isConsonant(char: string): boolean {
        return (
            char.match(/[a-z]/i) !== null &&
            !'aeiou'.includes(char.toLowerCase())
        );
    }

    const n = s.length;
    let count = 0;

    for (let i = 0; i < n; i++) {
        const vowelCounts: Record<string, number> = {
            a: 0,
            e: 0,
            i: 0,
            o: 0,
            u: 0,
        };
        let consonantCount = 0;

        for (let j = i; j < n; j++) {
            const char = s[j].toLowerCase();

            if ('aeiou'.includes(char)) {
                vowelCounts[char]++;
            } else if (isConsonant(char)) {
                consonantCount++;
            }

            if (hasAllVowels(vowelCounts) && consonantCount === k) {
                count++;
            }
        }
    }

    return count;
}

const s1 = 'aeioubcd';
const k1 = 3;
console.log(countSubstrings(s1, k1));

const s2 = 'abcdeiou';
const k2 = 0;
console.log(countSubstrings(s2, k2));

const s3 = 'aeioubcdfgh';
const k3 = 4;
console.log(countSubstrings(s3, k3));

const s4 = 'aeiou';
const k4 = 1;
console.log(countSubstrings(s4, k4));
