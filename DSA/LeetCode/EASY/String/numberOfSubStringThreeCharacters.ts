/**
 * @fileoverview Counts the umber of substrings containing at lease one occurence of 'a', 'b' and
 * @author [bad-al] (fuck)
 *
 */

/**
 *  @param { string } s
 *  @returns { number}
 */
function numberOfSubstrings(s: string): number {
    const n = s.length;
    let count = 0;

    for (let i = 0; i < n; i++) {
        const charCount: { [key: string]: number } = {
            a: 0,
            b: 0,
            c: 0,
        };

        for (let j = i; j < n; j++) {
            charCount[s[j]]++;

            if (
                charCount['a'] > 0 &&
                charCount['b'] > 0 &&
                charCount['c'] > 0
            ) {
                count++;
            }
        }
    }

    return count;
}

function runTests() {
    const testCases: { input: string; expected: number }[] = [
        { input: 'abcabc', expected: 10 },
        { input: 'aaacb', expected: 3 },
        { input: 'abc', expected: 1 },
        { input: 'abccba', expected: 12 },
        { input: 'acbbcac', expected: 10 },
        { input: 'abcabcabc', expected: 36 },
    ];

    console.log('Running Test...');

    testCases.forEach((testCase, index) => {
        const result = numberOfSubstrings(testCase.input);

        if (result === testCase.expected) {
            console.log(`Test ${index + 1} passed`);
        } else {
            console.error(
                `Test ${index + 1} failed. Expected ${testCase.expected}, got ${result}.`,
            );
        }
    });

    console.log('Test Complete');
}

runTests();
