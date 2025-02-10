import chalk from 'chalk';

/**
 * Detect a cycle doens't exist
 */
function isNotCycle(nums: number[], prevDirection: boolean, pointer: number) {
    /**
     * Set current directio to true id current element is positive, set false otherwise
     */
    let currenetDirection: boolean = nums[pointer] >= 0;

    /**
     * If current drection and previous direction are different or,
     * moving a pointer takes back to the same value, cuycle is not possible,
     * we return true, otherwise return false
     */
    if (
        prevDirection !== currenetDirection ||
        Math.abs(nums[pointer] % nums.length) === 0
    ) {
        return true;
    } else {
        return false;
    }
}

/**
 * calculate the next step
 */
function nextStep(pointer: number, value: number, size: number): number {
    let result = (value + pointer) % size;

    if (result < 0) {
        result += size;
    }

    return result;
}

function circularArrayLoop(nums: number[]): boolean {
    let size = nums.length;

    for (let i = 0; i < size; i++) {
        let slow = i;
        let fast = i;
        let forward: boolean = nums[i] > 0; // set true in forward, if element is positive otherwise false

        while (true) {
            slow = nextStep(slow, nums[slow], size);
            if (isNotCycle(nums, forward, slow)) {
                break;
            }

            fast = nextStep(fast, nums[fast], size);
            if (isNotCycle(nums, forward, fast)) {
                break;
            }

            if (slow === fast) {
                return true;
            }
        }
    }

    return false;
}

function main() {
    const input: number[][] = [
        [-2, -3, -9],
        [-5, -4, -3, -2, -1],
        [-1, -2, -3, -4, -5],
        [2, 1, -1, -2],
        [-1, -2, -3, -4, -5, 6],
        [1, 2, -3, 3, 4, 7, 1],
        [2, 2, 2, 7, 2, -1, 2, -1, -1],
    ];

    let num = 1;

    for (let i = 0; i < input.length; i++) {
        console.log(
            chalk.blueBright(`${num}.`) +
                chalk.bold(`\tCircular array = `) +
                chalk.greenBright(`[ ${input.join(', ')} ]`) +
                '\n',
        );

        console.log(
            chalk.bold('\tFound loop = ') +
                (circularArrayLoop(input[i])
                    ? chalk.green('✅ Yes')
                    : chalk.red('❌ No')),
        );

        console.log(chalk.gray('-'.repeat(100)), '\n');
        num += 1;
    }
}

main();
