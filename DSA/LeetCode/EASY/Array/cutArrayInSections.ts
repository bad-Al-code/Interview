/**
 * Checks if horizontal cuts can be made at the given y-coordinates.
 *
 * @param {number} n
 * @param {number[][]} rectangles
 * @param {number} cut1Y
 * @param {number} cut2Y
 * @returns {boolean}
 */
function checkHorizontalCuts(
    n: number,
    rectangles: number[][],
    cut1Y: number,
    cut2Y: number,
): boolean {
    if (
        cut1Y >= cut2Y ||
        cut1Y <= 0 ||
        cut1Y >= n ||
        cut2Y <= 0 ||
        cut2Y >= n
    ) {
        return false;
    }

    let section1Count = 0;
    let section2Count = 0;
    let section3Count = 0;

    for (const [startx, starty, endx, endy] of rectangles) {
        let belongsToSection = 0;

        if (endy <= cut1Y) {
            section1Count++;
            belongsToSection++;
        }
        if (starty >= cut2Y) {
            section3Count++;
            belongsToSection++;
        }
        if (starty >= cut1Y && endy <= cut2Y) {
            section2Count++;
            belongsToSection++;
        }
        if (belongsToSection === 0) {
            return false;
        }

        if (belongsToSection > 1) {
            return false;
        }
    }

    return (
        section1Count > 0 &&
        section2Count > 0 &&
        section3Count > 0 &&
        section1Count + section2Count + section3Count === rectangles.length
    );
}

/**
 * Checks if vertical cuts can be made at the given x-coordinates.
 *
 * @param {number} n
 * @param {number[][]} rectangles
 * @param {number} cut1X
 * @param {number} cut2X
 * @returns {boolean}
 */
function checkVerticalCuts(
    n: number,
    rectangles: number[][],
    cut1X: number,
    cut2X: number,
): boolean {
    if (
        cut1X >= cut2X ||
        cut1X <= 0 ||
        cut1X >= n ||
        cut2X <= 0 ||
        cut2X >= n
    ) {
        return false;
    }

    let section1Count = 0;
    let section2Count = 0;
    let section3Count = 0;

    for (const [startx, starty, endx, endy] of rectangles) {
        let belongsToSection = 0;

        if (endx <= cut1X) {
            section1Count++;
            belongsToSection++;
        }
        if (startx >= cut2X) {
            section3Count++;
            belongsToSection++;
        }
        if (startx >= cut1X && endx <= cut2X) {
            section2Count++;
            belongsToSection++;
        }
        if (belongsToSection === 0) {
            return false;
        }

        if (belongsToSection > 1) {
            return false;
        }
    }

    return (
        section1Count > 0 &&
        section2Count > 0 &&
        section3Count > 0 &&
        section1Count + section2Count + section3Count === rectangles.length
    );
}

/**
 * Checks if a grid can be cut into sections such that each section contains at least one rectangle and every rectangle belongs to exactly one section.
 *
 * @param {number} n
 * @param {number[][]} rectangles
 * @returns {boolean}
 */
function checkValidCuts(n: number, rectangles: number[][]): boolean {
    if (rectangles.length < 3) return false;

    for (let i = 1; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (checkHorizontalCuts(n, rectangles, i, j)) {
                return true;
            }
        }
    }

    for (let i = 1; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (checkVerticalCuts(n, rectangles, i, j)) {
                return true;
            }
        }
    }

    return false;
}

export const testCases = [
    {
        n: 4,
        rectangles: [
            [1, 1, 2, 2],
            [2, 3, 3, 4],
            [3, 1, 4, 2],
        ],
        expected: true,
    },
    {
        n: 3,
        rectangles: [
            [1, 1, 2, 2],
            [1, 2, 2, 3],
            [2, 2, 3, 3],
        ],
        expected: false,
    },
    {
        n: 5,
        rectangles: [
            [1, 1, 2, 2],
            [3, 3, 4, 4],
            [1, 3, 2, 4],
            [3, 1, 4, 2],
        ],
        expected: true,
    },
    {
        n: 4,
        rectangles: [[1, 1, 3, 3]],
        expected: false,
    },
];

testCases.forEach((testCase, index) => {
    const result = checkValidCuts(testCase.n, testCase.rectangles);
    console.log(`Test Case ${index + 1}:`);
    console.log(
        `  Input: n = ${testCase.n}, rectangles = ${JSON.stringify(testCase.rectangles)}`,
    );
    console.log(`  Output: ${result}`);
    console.log(`  Expected: ${testCase.expected}`);
    console.log(`  Result matches expected: ${result === testCase.expected}`);
    console.log('---');
});
