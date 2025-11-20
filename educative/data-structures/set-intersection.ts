type Interval = number[];
type PointSet = number[];

function getSortedIntervals(intervals: Interval[]): Interval[] {
    return intervals.slice().sort((a, b) => {
        if (a[1] !== b[1]) {
            return a[1] - b[1];
        }

        return b[0] - a[0];
    });
}

function calculateOverlap(
    chosenPoints: PointSet,
    start: number,
    end: number,
): number {
    let count = 0;

    for (let i = chosenPoints.length - 1; i >= 0; i--) {
        const point = chosenPoints[i];

        if (point < start) {
            break;
        }

        if (point <= end) {
            count++;
        }

        if (count >= 2) {
            break;
        }
    }

    return count;
}

function appendGreedyPoints(
    chosenPoints: PointSet,
    count: number,
    currentEnd: number,
): void {
    if (count === 0) {
        chosenPoints.push(currentEnd - 1);
        chosenPoints.push(currentEnd);
    } else if (count === 1) {
        chosenPoints.push(currentEnd);
    }
}

class Solution {
    public intersectionSizeTwo(intervals: Interval[]): number {
        const sortedIntervals = getSortedIntervals(intervals);
        const chosenPoints: PointSet = [];

        for (const interval of sortedIntervals) {
            const [start, end] = interval;

            const overlapCount = calculateOverlap(chosenPoints, start, end);
            appendGreedyPoints(chosenPoints, overlapCount, end);
        }

        return chosenPoints.length;
    }
}

function intersectionSizeTwo(intervals: number[][]): number {
    const solution = new Solution();

    return solution.intersectionSizeTwo(intervals);
}
