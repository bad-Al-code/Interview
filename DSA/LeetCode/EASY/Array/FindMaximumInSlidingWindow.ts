import chalk from 'chalk';

class ListNode {
    val: number;
    next: ListNode | null;
    prev: ListNode | null;

    constructor(val: number) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class Deque {
    private head: ListNode | null;
    private tail: ListNode | null;
    length: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    unshift(val: number): void {
        const newNode = new ListNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }

        this.length++;
    }

    push(val: number): void {
        const newNode = new ListNode(val);
        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    shift(): number | null {
        if (!this.head) {
            return null;
        }

        const removedNode = this.head;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = removedNode.next;
            this.head!.prev = null;
        }

        this.length--;

        return removedNode.val;
    }

    pop(): number | null {
        if (!this.tail) {
            return null;
        }

        const removedNode = this.tail;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = removedNode.prev;
            this.tail!.next = null;
        }

        this.length--;

        return removedNode.val;
    }

    peekFront(): number | null {
        return this.head ? this.head.val : null;
    }

    peekBack(): number | null {
        return this.tail ? this.tail.val : null;
    }

    isEmpty(): boolean {
        return this.length === 0;
    }

    toString(): string {
        if (this.head === null) return '[]';

        let result = '[';
        let current = this.head;
        while (current.next !== null) {
            result += current.val + ',';
            current = current.next;
        }

        result += current.val + ']';
        return result;
    }
}

/**
 * Remove all the indexed from currentWindow whose corrosponding values are smaller than or
 * ewaul to the current element
 */
function cleanUp(i: number, currentWindow: Deque, nums: number[]) {
    while (
        currentWindow.length !== 0 &&
        nums[i] >= nums[currentWindow.peekBack()!]
    ) {
        currentWindow.pop();
    }
}

function findMaxumumInSlidingWindow(nums: number[], w: number): number[] {
    if (nums.length === 0) return [];
    if (w > nums.length) {
        w = nums.length;
    }

    const output = new Array<number>(nums.length - w + 1);
    const currentWindow = new Deque();

    for (let i = 0; i < w; i++) {
        cleanUp(i, currentWindow, nums);

        currentWindow.push(i);
    }

    output[0] = nums[currentWindow.peekFront()!];

    for (let i = w; i < nums.length; i++) {
        cleanUp(i, currentWindow, nums);

        if (
            currentWindow.length !== 0 &&
            currentWindow.peekFront()! <= i - w + 1
        ) {
            currentWindow.shift();
        }

        currentWindow.push(i);

        output[i - w + 1] = nums[currentWindow.peekFront()!];
    }

    return output;
}

export function main() {
    const windowSizes = [3, 3, 3, 3, 2, 4, 3, 2, 3, 18];

    const numLists = [
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
        [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
        [
            1, 5, 8, 10, 10, 10, 12, 14, 15, 19, 19, 19, 17, 14, 13, 12, 12, 12,
            14, 18, 22, 26, 26, 26, 28, 29, 30,
        ],
        [10, 6, 9, -3, 23, -1, 34, 56, 67, -1, -4, -8, -2, 9, 10, 34, 67],
        [4, 5, 6, 1, 2, 3],
        [9, 5, 3, 1, 6, 3],
        [2, 4, 6, 8, 10, 12, 14, 16],
        [-1, -1, -2, -4, -6, -7],
        [4, 4, 4, 4, 4, 4],
    ];

    for (let i = 0; i < numLists.length; i++) {
        console.log(chalk.green(`${i + 1}.\tInput array:\t[${numLists[i]}]`));
        console.log(chalk.cyan(`\tWindow size:\t${windowSizes[i]}`));
        console.log(
            chalk.blue(
                `\n\tMaximum in each sliding window:\t[${findMaxumumInSlidingWindow(numLists[i], windowSizes[i])}]`,
            ),
        );
        Array(100)
            .fill('-')
            .forEach((char) => process.stdout.write(char));
        console.log();
    }
}

main();
