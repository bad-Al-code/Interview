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

    let section1Rectangles: number[] = [];
    let section2Rectangles: number[] = [];
    let section3Rectangles: number[] = [];

    rectangles.forEach((rect, index) => {
        const [startx, starty, endx, endy] = rect;

        if (endy <= cut1Y) {
            section1Rectangles.push(index);
        } else if (starty >= cut2Y) {
            section3Rectangles.push(index);
        } else if (starty >= cut1Y && endy <= cut2Y) {
            section2Rectangles.push(index);
        }
    });

    for (let i = 0; i < rectangles.length; i++) {
        let belongsToSection = 0;
        if (section1Rectangles.includes(i)) belongsToSection++;
        if (section2Rectangles.includes(i)) belongsToSection++;
        if (section3Rectangles.includes(i)) belongsToSection++;

        if (belongsToSection > 1) return false;
    }

    return (
        section1Rectangles.length > 0 &&
        section2Rectangles.length > 0 &&
        section3Rectangles.length > 0 &&
        section1Rectangles.length +
            section3Rectangles.length +
            section2Rectangles.length ===
            rectangles.length
    );
}

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

    let section1Rectangles: number[] = [];
    let section2Rectangles: number[] = [];
    let section3Rectangles: number[] = [];

    rectangles.forEach((rect, index) => {
        const [startx, starty, endx, endy] = rect;

        if (endx <= cut1X) {
            section1Rectangles.push(index);
        } else if (startx >= cut2X) {
            section3Rectangles.push(index);
        } else if (startx >= cut1X && endx <= cut2X) {
            section2Rectangles.push(index);
        }
    });

    for (let i = 0; i < rectangles.length; i++) {
        let belongsToSection = 0;
        if (section1Rectangles.includes(i)) belongsToSection++;
        if (section2Rectangles.includes(i)) belongsToSection++;
        if (section3Rectangles.includes(i)) belongsToSection++;

        if (belongsToSection > 1) return false;
    }

    return (
        section1Rectangles.length > 0 &&
        section2Rectangles.length > 0 &&
        section3Rectangles.length > 0 &&
        section1Rectangles.length +
            section2Rectangles.length +
            section3Rectangles.length ===
            rectangles.length
    );
}

function checkValidCuts(n: number, rectangles: number[][]): boolean {
    for (let i = 1; i < rectangles.length; i++) {
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
