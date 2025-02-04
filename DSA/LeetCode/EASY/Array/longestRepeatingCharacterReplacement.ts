function longestRepeatingCharacterReplacements(s: string, k: number): number {
    const stringLength = s.length;
    let lengthOfMaxSubstring = 0;
    let start = 0;

    const charFreq: Map<string, number> = new Map();
    let mostFreqChar = 0;

    for (let end = 0; end < stringLength; ++end) {
        const currentChar = s[end];

        charFreq.set(currentChar, (charFreq.get(currentChar) || 0) + 1);

        mostFreqChar = Math.max(mostFreqChar, charFreq.get(currentChar) || 0);

        if (end - start + 1 - mostFreqChar > k) {
            const startChar = s[start];
            charFreq.set(startChar, (charFreq.get(startChar) || 1) - 1);

            start += 1;
        }

        lengthOfMaxSubstring = Math.max(end - start + 1, lengthOfMaxSubstring);
    }

    return lengthOfMaxSubstring;
}

const inputStrings: string[] = [
    'aabccbb',
    'abbcb',
    'abccde',
    'abbcab',
    'bbbbbbbbb',
];
export const k: number[] = [2, 1, 1, 2, 4];

for (let i = 0; i < inputStrings.length; ++i) {
    console.log(`${i + 1}.\tInput String: '${inputStrings[i]}'`);
    console.log(`\tk: ${k[i]}`);
    console.log(
        '\tLength of the longest substring with repeating characters: ' +
            longestRepeatingCharacterReplacements(inputStrings[i], k[i]),
    );
    console.log('-'.repeat(100));
}
