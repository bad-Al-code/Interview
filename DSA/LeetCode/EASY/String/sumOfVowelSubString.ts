/**
 * @fileoverview Calculates the sum of vowels in all substrings of a given word.
 * @author bad-al (fuck)
 */

/**
 * @param { string } char
 * @returns { boolean }
 */
function isVowel(char: string): boolean {
    return 'aeiou'.includes(char);
}

/**
 * @param { string } word
 * @returns { number }
 */
function countVowels(word: string): number {
    const n = word.length;
    let totalVowelCount = 0;

    for (let i = 0; i < n; i++) {
        if (isVowel(word[i])) {
            totalVowelCount += (i + 1) * (n - i);
        }
    }

    return totalVowelCount;
}

function runTests() {
    const testCases: { input: string; expected: number }[] = [
        { input: 'aba', expected: 6 },
        { input: 'abc', expected: 3 },
        { input: 'ltcd', expected: 0 },
        { input: 'aeiou', expected: 15 },
        { input: 'a', expected: 1 },
        { input: 'leetcode', expected: 12 },
    ];

    console.log('Running tests...');

    testCases.forEach((testCase, index) => {
        const result = countVowels(testCase.input);
        if (result === testCase.expected) {
            console.log(`Test ${index + 1} passed.`);
        } else {
            console.error(
                `Test ${index + 1} failed. Expected ${testCase.expected}, got ${result}.`,
            );
        }
    });

    console.log('Tests completed.');
}

runTests();
