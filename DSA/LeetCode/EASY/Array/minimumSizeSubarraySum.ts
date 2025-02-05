import chalk from 'chalk';

/**
 * Finds the minimum length of a contiguous subarray whose sum is at least `target`.
 * Uses the sliding window technique for efficiency.
 *
 * @param {number} target
 * @param {number[]} nums
 * @returns {number}
 */
const minSubArrayLen = (target: number, nums: number[]): number => {
    let windowSize: number = Infinity;
    let start: number = 0;
    let sum: number = 0;

    for (let end = 0; end < nums.length; end++) {
        sum += nums[end];

        while (sum >= target) {
            const currSubArrSize = end + 1 - start;
            windowSize = Math.min(windowSize, currSubArrSize);
            sum -= nums[start];
            start += 1;
        }
    }

    return windowSize !== Infinity ? windowSize : 0;
};

function main(): void {
    const targets: number[] = [7, 4, 11, 10, 5, 15];
    const inputArrs: number[][] = [
        [2, 3, 1, 2, 4, 3],
        [1, 4, 4],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 2, 3, 4],
        [1, 2, 1, 3],
        [5, 4, 9, 8, 11, 3, 7, 12, 15, 44],
    ];

    inputArrs.forEach((arr, i) => {
        const result = minSubArrayLen(targets[i], arr);
        console.log(
            chalk.blue(`${i + 1}. \t Input array:`),
            chalk.greenBright(`[${arr}]`),
        );
        console.log(chalk.yellow('\t Target:'), chalk.cyanBright(targets[i]));
        console.log(
            chalk.magenta('\t Minimum Length of Subarray:'),
            chalk.redBright(result),
        );
        console.log(chalk.gray('-'.repeat(100)));
    });
}

main();
