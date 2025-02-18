import chalk from 'chalk';

export class MinHeap {
    private data: [number, number][];

    constructor(data: [number, number][] = []) {
        this.data = data;
        this.heapify();
    }

    private heapify(): void {
        for (let i = 1; i < this.size(); i++) {
            this.percolateUp(i);
        }
    }

    public size(): number {
        return this.data.length;
    }

    public peek(): [number, number] | null {
        return this.size() === 0 ? null : this.data[0];
    }

    public push(value: [number, number]): void {
        this.data.push(value);
        this.percolateUp(this.size() - 1);
    }

    public pop(): [number, number] | null {
        if (this.size() === 0) return null;
        const result = this.data[0];
        const last = this.data.pop();
        if (this.size() !== 0 && last !== undefined) {
            this.data[0] = last;
            this.percolateDown(0);
        }
        return result;
    }

    private percolateUp(index: number): void {
        while (index > 0) {
            const parentIndex = (index - 1) >> 1;
            if (this.data[index][0] < this.data[parentIndex][0]) {
                this.swap(index, parentIndex);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    private percolateDown(index: number): void {
        const lastIndex = this.size() - 1;
        while (true) {
            const leftIndex = index * 2 + 1;
            const rightIndex = index * 2 + 2;
            let findIndex = index;

            if (
                leftIndex <= lastIndex &&
                this.data[leftIndex][0] < this.data[findIndex][0]
            ) {
                findIndex = leftIndex;
            }

            if (
                rightIndex <= lastIndex &&
                this.data[rightIndex][0] < this.data[findIndex][0]
            ) {
                findIndex = rightIndex;
            }

            if (index !== findIndex) {
                this.swap(index, findIndex);
                index = findIndex;
            } else {
                break;
            }
        }
    }

    private swap(index1: number, index2: number): void {
        [this.data[index1], this.data[index2]] = [
            this.data[index2],
            this.data[index1],
        ];
    }
}

export class MaxHeap {
    private data: number[];

    constructor(data: number[] = []) {
        this.data = data;
        this.heapify();
    }

    private heapify(): void {
        for (let i = 1; i < this.size(); i++) {
            this.percolateUp(i);
        }
    }

    public size(): number {
        return this.data.length;
    }

    public peek(): number | null {
        return this.size() === 0 ? null : this.data[0];
    }

    public push(value: number): void {
        this.data.push(value);
        this.percolateUp(this.size() - 1);
    }

    public pop(): number | null {
        if (this.size() === 0) return null;
        const result = this.data[0];
        const last = this.data.pop();
        if (this.size() !== 0 && last !== undefined) {
            this.data[0] = last;
            this.percolateDown(0);
        }
        return result;
    }

    private percolateUp(index: number): void {
        while (index > 0) {
            const parentIndex = (index - 1) >> 1;
            if (this.data[index] > this.data[parentIndex]) {
                this.swap(index, parentIndex);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    private percolateDown(index: number): void {
        const lastIndex = this.size() - 1;
        while (true) {
            const leftIndex = index * 2 + 1;
            const rightIndex = index * 2 + 2;
            let findIndex = index;

            if (
                leftIndex <= lastIndex &&
                this.data[leftIndex] > this.data[findIndex]
            ) {
                findIndex = leftIndex;
            }

            if (
                rightIndex <= lastIndex &&
                this.data[rightIndex] > this.data[findIndex]
            ) {
                findIndex = rightIndex;
            }

            if (index !== findIndex) {
                this.swap(index, findIndex);
                index = findIndex;
            } else {
                break;
            }
        }
    }

    private swap(index1: number, index2: number): void {
        [this.data[index1], this.data[index2]] = [
            this.data[index2],
            this.data[index1],
        ];
    }
}

function maximumCapital(
    c: number,
    k: number,
    capitals: number[],
    profits: number[],
): number {
    let currentCapital: number = c;
    let capitalsMinHeap = new MinHeap();
    let profitsMaxHeap = new MaxHeap();

    for (let x = 0; x < capitals.length; x++) {
        capitalsMinHeap.push([capitals[x], x]);
    }

    for (let counter = 0; counter < k; counter++) {
        while (
            capitalsMinHeap.size() > 0 &&
            capitalsMinHeap.peek()![0] <= currentCapital
        ) {
            let [_, index] = capitalsMinHeap.pop()!;
            profitsMaxHeap.push(profits[index]);
        }

        if (profitsMaxHeap.size() === 0) {
            break;
        }

        currentCapital += profitsMaxHeap.pop()!;
    }

    return currentCapital;
}

function main(): void {
    const input: [number, number, number[], number[]][] = [
        [0, 1, [1, 1, 2], [1, 2, 3]],
        [1, 2, [1, 2, 2, 3], [2, 4, 6, 8]],
        [2, 3, [1, 3, 4, 5, 6], [1, 2, 3, 4, 5]],
        [1, 3, [1, 2, 3, 4], [1, 3, 5, 7]],
        [7, 2, [6, 7, 8, 10], [4, 8, 12, 14]],
        [2, 4, [2, 3, 5, 6, 8, 12], [1, 2, 5, 6, 8, 9]],
    ];

    for (let i = 0; i < input.length; i++) {
        console.log(
            chalk.blue.bold(`${i + 1}.`),
            chalk.yellow('Project Details:'),
        );
        console.log(chalk.green('\tCapital Requirements:'), input[i][2]);
        console.log(chalk.green('\tExpected Profits:'), input[i][3]);
        console.log(chalk.green('\tNumber of Projects:'), input[i][1]);
        console.log(chalk.green('\tStart-up Capital:'), input[i][0]);

        console.log(
            chalk.cyan.bold('\n\tMaximum Capital Earned:'),
            chalk.magenta.bold(
                maximumCapital(
                    input[i][0],
                    input[i][1],
                    input[i][2],
                    input[i][3],
                ),
            ),
        );
        console.log(chalk.gray('-'.repeat(100)));
    }
}

main();
