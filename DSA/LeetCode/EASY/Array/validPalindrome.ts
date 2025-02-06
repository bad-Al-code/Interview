import chalk from 'chalk';

/**
 * Checks if a given string is a palindrome, considering only alphanumeric characters
 * and ignoring case.
 *
 * @param {string} s
 * @returns {boolean}
 */
function isPalindrome(s: string): boolean {
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    let left = 0,
        right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

function main(): void {
    const testCases: string[] = [
        'RACEACAR',
        'A',
        'ABCDEFGFEDCBA',
        'ABC',
        'ABCBA',
        'ABBA',
        'RACEACAR',
        'A man, a plan, a canal: Panama!',
        "No 'x' in Nixon",
        'Was it a car or a cat I saw?',
    ];

    let i = 1;

    testCases.forEach((s) => {
        const isPal = isPalindrome(s);

        console.log(chalk.blueBright(`Test Case #${i}`));
        console.log(chalk.gray('-'.repeat(100)));
        console.log(chalk.cyan(`The input string is: '${chalk.yellow(s)}'`));
        console.log(
            chalk.cyan(`Length of the string: ${chalk.magenta(s.length)}`),
        );
        console.log(
            chalk.bold('\nIs it a palindrome?.....') +
                (isPal ? chalk.green('✅ Yes') : chalk.red('❌ No')),
        );
        console.log(chalk.gray('-'.repeat(100)));
        i++;
    });
}

main();
