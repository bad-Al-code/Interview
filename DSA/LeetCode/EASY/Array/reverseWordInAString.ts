import chalk from 'chalk';

/**
 * Reverses the words in a given sentence while maintaining word order.
 * Removes extra spaces and reverses words in-place.
 *
 * @param {string} sentence
 * @returns {string}
 */
function reverseWords(sentence: string): string {
    sentence = sentence.trim().replace(/  +/g, ' ');

    let sentenceArr: string[] = [...sentence];
    let strLen: number = sentenceArr.length;

    strRev(sentenceArr, 0, strLen - 1);

    let start: number = 0,
        end: number = 0;

    while (start < strLen) {
        while (end < strLen && sentenceArr[end] !== ' ') {
            end += 1;
        }
        strRev(sentenceArr, start, end - 1);
        start = end + 1;
        end += 1;
    }

    return sentenceArr.join('');
}

/**
 * Helper function to reverse a portion of an array in-place.
 *
 * @param {string[]} str
 * @param {number} startRev
 * @param {number} endRev
 */
function strRev(str: string[], startRev: number, endRev: number): void {
    while (startRev < endRev) {
        let temp: string = str[startRev];
        str[startRev] = str[endRev];
        str[endRev] = temp;

        startRev += 1;
        endRev -= 1;
    }
}

function main(): void {
    const testCases: string[] = [
        ' Hello World ',
        'We love JavaScript',
        'The quick brown fox jumped over the lazy dog',
        'Hey',
        'To be or not to be',
        'AAAAA',
        ' Hello     World ',
    ];

    testCases.forEach((sentence, index) => {
        console.log(chalk.blueBright(`Test Case #${index + 1}`));
        console.log(chalk.gray('-'.repeat(100)));
        console.log(
            chalk.cyan(`Original String:  '${chalk.yellow(sentence)}'`),
        );
        console.log(
            chalk.cyan(
                `Reversed String:  '${chalk.green(reverseWords(sentence))}'`,
            ),
        );
        console.log(chalk.gray('-'.repeat(100)));
    });
}

main();
