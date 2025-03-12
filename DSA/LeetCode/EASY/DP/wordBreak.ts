/**
 * @fileoverview Check if a string can be segmented into a space-seperated sqquence of dictionary
 * words.
 * @author bad-al
 */

/**
 * @param {string} s
 * @param { string[] } wordDict
 * @returns { boolean }
 */
function wordBreak(s: string, wordDict: string[]): boolean {
    if (s.length > 250 || wordDict.length > 1000) {
        throw new Error('Input string or dictionary exceeds allowed length.');
    }

    const wordSet = new Set<string>(wordDict);
    const dp: boolean[] = new Array(s.length + 1).fill(false);
    dp[0] = true;

    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordSet.has(s.substring(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[s.length];
}

export const testCases: { s: string; wordDict: string[]; expected: boolean }[] =
    [
        { s: 'leetcode', wordDict: ['leet', 'code'], expected: true },
        { s: 'applepenapple', wordDict: ['apple', 'pen'], expected: true },
        {
            s: 'catsandog',
            wordDict: ['cats', 'dog', 'sand', 'and', 'cat'],
            expected: false,
        },
        {
            s: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab',
            wordDict: [
                'a',
                'aa',
                'aaa',
                'aaaa',
                'aaaaa',
                'aaaaaa',
                'aaaaaaa',
                'aaaaaaaa',
                'aaaaaaaaa',
                'aaaaaaaaaa',
            ],
            expected: false,
        },
    ];

testCases.forEach((testCase, index) => {
    const result = wordBreak(testCase.s, testCase.wordDict);
    console.log(`Test Case ${index + 1}:`);
    console.log(`  Input String: "${testCase.s}"`);
    console.log(`  Word Dictionary: ${JSON.stringify(testCase.wordDict)}`);
    console.log(`  Result: ${result}`);
    console.log(`  Expected: ${testCase.expected}`);
    console.log(`  Match: ${result === testCase.expected}`);
    console.log('---');
});
