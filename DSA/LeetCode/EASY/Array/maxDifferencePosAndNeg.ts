/**
 * @fileoverview Given an array nums sorted in non-decreasing order, return the maximum between the number of positive integers and the number of negative integers.
 * @author bad-al
 */

/**
 * @param { number[] } nums
 * @returns number
 */
function maximumCount(nums: number[]): number {
    let positiveCount: number = 0;
    let negativeCount: number = 0;

    for (const num of nums) {
        if (num > 0) {
            positiveCount++;
        } else if (num < 0) {
            negativeCount++;
        }
    }

    return Math.max(positiveCount, negativeCount);
}

function testMaximum(): void {
    const testCases: { nums: number[]; expected: number }[] = [
        { nums: [-2, -1, -1, 1, 2, 3], expected: 3 },
        { nums: [-3, -2, -1, 0, 0, 1, 2], expected: 3 },
        { nums: [5, 20, 66, 1314], expected: 4 },
        { nums: [-5, -4, -3, -2, -1], expected: 5 },
        { nums: [0, 0, 0, 0, 0], expected: 0 },
        { nums: [], expected: 0 },
        { nums: [-1], expected: 1 },
        { nums: [1], expected: 1 },
        { nums: [-1, 0, 1], expected: 1 },
    ];

    testCases.forEach((testCase, index) => {
        const actual = maximumCount(testCase.nums);
        if (actual === testCase.expected) {
            console.log(`Test Case ${index + 1}: Passed`);
        } else {
            console.error(
                `Test Case ${index + 1}: Failed (Expected ${testCase.expected}, Got ${actual})`,
            );
        }
    });
}

testMaximum();
