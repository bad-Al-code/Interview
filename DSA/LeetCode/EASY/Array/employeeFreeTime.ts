export class MinHeap {
    private data: number[][];
    private compareVal: (a: number, b: number) => number;

    constructor(data: number[][] = []) {
        this.data = data;
        this.compareVal = (a: number, b: number) => a - b;
        this.heapify();
    }

    /**
     * Convers an unorderd array into a valid min-heap
     */
    private heapify(): void {
        if (this.size() < 2) return;
        for (let i = 1; i < this.size(); i++) {
            this.percolateUo(i);
        }
    }

    /**
     * Moves an element up the head to restire the heap property
     *
     * @param { number } index
     */
    private percolateUo(index: number): void {
        while (index > 0) {
            const parentIndex = (index - 1) >> 1;
            if (
                this.compareVal(
                    this.data[index][0],
                    this.data[parentIndex][0],
                ) < 0
            ) {
                this.swap(index, parentIndex);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    /**
     * Moves an element down the heap to restore the heap property
     *
     * @param { number } index
     */
    private percolateDown(index: number): void {
        const lastIndex = this.size() - 1;

        while (true) {
            const leftIndex = index * 2 + 1;
            const rightIndex = index * 2 + 2;
            let smallestIndex = index;

            if (
                leftIndex <= lastIndex &&
                this.compareVal(
                    this.data[leftIndex][0],
                    this.data[smallestIndex][0],
                ) < 0
            ) {
                smallestIndex = leftIndex;
            }

            if (
                rightIndex <= lastIndex &&
                this.compareVal(
                    this.data[rightIndex][0],
                    this.data[smallestIndex][0],
                ) < 0
            ) {
                smallestIndex = rightIndex;
            }

            if (index !== smallestIndex) {
                this.swap(index, smallestIndex);
                index = smallestIndex;
            } else {
                break;
            }
        }
    }

    /**
     * Removes and returns the smallest element in the heap
     *
     * @returns { number[] | null }
     */
    poll(): number[] | null {
        if (this.size() === 0) return null;

        const result = this.data[0];
        const last = this.data.pop()!;

        if (this.size() !== 0) {
            this.data[0] = last;
            this.percolateDown(0);
        }

        return result;
    }

    /**
     * inserts a new element into the heap
     *
     * @param {number[]} value
     */
    offer(value: number[]): void {
        this.data.push(value);
        this.percolateUo(this.size() - 1);
    }

    /**
     * Returns the smalled element in the heap withou removing it
     *
     * @returns { number[]| null}
     */
    peek(): number[] | null {
        return this.size() === 0 ? null : this.data[0];
    }

    /**
     * Swap twp elements
     *
     * @param {number} index1
     * @param {number} index2
     */
    swap(index1: number, index2: number): void {
        [this.data[index1], this.data[index2]] = [
            this.data[index2],
            this.data[index1],
        ];
    }

    /**
     * Returns the number of elements in the heap
     *
     * @returns { number }
     */
    size(): number {
        return this.data.length;
    }
}

class Interval {
    start: number;
    end: number;
    closed: boolean;

    constructor(start: number, end: number) {
        this.start = start;
        this.end = end;
        this.closed = true;
    }

    /**
     * Set whether the interval is closed or open
     *
     * @param { boolean } closed
     */
    setClosed(closed: boolean): void {
        this.closed = closed;
    }

    /**
     * Formats the intervals as a string
     * closed interval are represented as [start, end],
     * while open intervals are represented as (start, end).
     *
     * @returns {string }
     */
    formatInterval(): string {
        return this.closed
            ? `[${this.start}, ${this.end}]`
            : `(${this.start}, ${this.end})`;
    }
}

/**
 * Disokay an array of intervas in a readable format
 *
 * @param { Interval[]} intervals
 * @returns { string }
 */
function display(intervals: Interval[]): string {
    let result = '[';

    for (let i = 0; i < intervals.length; i++) {
        result += intervals[i].formatInterval();
        if (i + 1 < intervals.length) {
            result += ', ';
        }
    }

    result += ']';

    return result;
}

/**
 * Find the time intervals for employess based on their schedules
 *
 * @param {Interval[][]} schedule
 * @returns { Interval[]}
 */
function employeeFreeTime(schedule: Interval[][]): Interval[] {
    const result: Interval[] = [];
    const heap = new MinHeap();

    for (let i = 0; i < schedule.length; i++) {
        const interval = schedule[i][0];
        heap.offer([interval.start, i, 0]);
    }

    const [firstStart, firstEmpIdx, firstIdx] = heap.peek()!;
    let previous: number = schedule[firstEmpIdx][firstIdx].start;

    while (heap.size() > 0) {
        const [, employeeIdx, intervalIdx] = heap.poll()!;
        const interval = schedule[employeeIdx][intervalIdx];

        if (interval.start > previous) {
            result.push(new Interval(previous, interval.start));
        }

        previous = Math.max(previous, interval.end);

        if (intervalIdx + 1 < schedule[employeeIdx].length) {
            const nextInterval = schedule[employeeIdx][intervalIdx + 1];
            heap.offer([nextInterval.start, employeeIdx, intervalIdx + 1]);
        }
    }

    return result;
}

function main(): void {
    const inputs: Interval[][][] = [
        [
            [new Interval(1, 2), new Interval(5, 6)],
            [new Interval(1, 3)],
            [new Interval(4, 10)],
        ],
        [
            [new Interval(1, 3), new Interval(6, 7)],
            [new Interval(2, 4)],
            [new Interval(2, 5), new Interval(9, 12)],
        ],
        [
            [new Interval(2, 3), new Interval(7, 9)],
            [new Interval(1, 4), new Interval(6, 7)],
        ],
        [
            [new Interval(3, 5), new Interval(8, 10)],
            [new Interval(4, 6), new Interval(9, 12)],
            [new Interval(5, 6), new Interval(8, 10)],
        ],
        [
            [new Interval(1, 3), new Interval(6, 9), new Interval(10, 11)],
            [new Interval(3, 4), new Interval(7, 12)],
            [new Interval(1, 3), new Interval(7, 10)],
            [new Interval(1, 4)],
            [new Interval(7, 10), new Interval(11, 12)],
        ],
        [
            [
                new Interval(1, 2),
                new Interval(3, 4),
                new Interval(5, 6),
                new Interval(7, 8),
            ],
            [new Interval(2, 3), new Interval(4, 5), new Interval(6, 8)],
        ],
        [
            [
                new Interval(1, 2),
                new Interval(3, 4),
                new Interval(5, 6),
                new Interval(7, 8),
                new Interval(9, 10),
                new Interval(11, 12),
            ],
            [
                new Interval(1, 2),
                new Interval(3, 4),
                new Interval(5, 6),
                new Interval(7, 8),
                new Interval(9, 10),
                new Interval(11, 12),
            ],
            [
                new Interval(1, 2),
                new Interval(3, 4),
                new Interval(5, 6),
                new Interval(7, 8),
                new Interval(9, 10),
                new Interval(11, 12),
            ],
            [
                new Interval(1, 2),
                new Interval(3, 4),
                new Interval(5, 6),
                new Interval(7, 8),
                new Interval(9, 10),
                new Interval(11, 12),
            ],
        ],
    ];

    let i = 1;
    inputs.forEach((schedule) => {
        console.log(`${i}.\tEmployee Schedules:`);
        schedule.forEach((s) => console.log('\t\t', display(s)));
        console.log(
            "\tEmployees' free time:",
            display(employeeFreeTime(schedule)),
        );
        console.log('-'.repeat(100));
        i += 1;
    });
}

main();
