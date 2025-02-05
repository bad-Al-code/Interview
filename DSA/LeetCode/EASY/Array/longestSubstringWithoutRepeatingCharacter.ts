import chalk from 'chalk';

/**
 * Finds the length of the longest substring without repeating characters.
 *
 * @param {string} str
 * @returns {number}
 */
const findLongestSubstring = (str: string): number => {
    if (str.length === 0) return 0;

    const lastSeenAt = new Map<string, number>();
    let windowStart = 0;
    let longest = 0;

    for (let index = 0; index < str.length; index++) {
        const char = str[index];

        if (lastSeenAt.has(char) && lastSeenAt.get(char)! >= windowStart) {
            windowStart = lastSeenAt.get(char)! + 1;
        }

        lastSeenAt.set(char, index);

        longest = Math.max(longest, index - windowStart + 1);
    }

    return longest;
};

function main(): void {
    const testStrings: string[] = [
        'abcabcbb',
        'pwwkew',
        'bbbbb',
        'ababababa',
        '',
        'ABCDEFGHI',
        'ABCDEDCBA',
        'AAAABBBBCCCCDDDD',
    ];

    testStrings.forEach((str, index) => {
        console.log(
            chalk.blue(`${index + 1}. \t Input String:`),
            chalk.greenBright(`"${str}"`),
        );
        console.log(
            chalk.yellow('\t Length of longest substring:'),
            chalk.magentaBright(findLongestSubstring(str)),
        );
        console.log(chalk.gray('-'.repeat(100)));
    });
}

main();
