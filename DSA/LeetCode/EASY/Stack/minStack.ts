class MinStack {
    private stack: number[];
    private minStack: number[];

    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(val: number): void {
        this.stack.push(val);

        if (
            this.minStack.length === 0 ||
            val <= this.minStack[this.minStack.length - 1]
        ) {
            this.minStack.push(val);
        }
    }

    pop(): void {
        if (this.stack.length === 0) return;

        const poppedValue = this.stack.pop();

        if (poppedValue === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
    }

    top(): number {
        if (this.stack.length === 0) throw new Error('Stack is empty');

        return this.stack[this.stack.length - 1];
    }

    getMin(): number {
        if (this.minStack.length === 0) throw new Error('Stack is empty');

        return this.minStack[this.minStack.length - 1];
    }
}

function runMinStackTests() {
    const testCases: (string | number)[][][] = [
        [
            ['push', 5],
            ['push', 3],
            ['push', 7],
            ['getMin'],
            ['pop'],
            ['getMin'],
        ],
        [
            ['push', -2],
            ['push', 0],
            ['push', -3],
            ['getMin'],
            ['pop'],
            ['top'],
            ['getMin'],
        ],
        [
            ['push', 1],
            ['push', 2],
            ['push', 3],
            ['top'],
            ['getMin'],
            ['pop'],
            ['getMin'],
        ],
        [
            ['push', 10],
            ['push', 5],
            ['push', 1],
            ['getMin'],
            ['pop'],
            ['getMin'],
            ['pop'],
            ['getMin'],
        ],
    ];

    testCases.forEach((testCase, index) => {
        const minStack = new MinStack();
        console.log(`\nTest Case ${index + 1}:`);

        testCase.forEach((operation) => {
            const [op, value] = operation;

            try {
                if (op === 'push') {
                    minStack.push(value as number);
                    console.log(`push(${value})`);
                } else if (op === 'pop') {
                    minStack.pop();
                    console.log('pop()');
                } else if (op === 'top') {
                    console.log(`top() -> ${minStack.top()}`);
                } else if (op === 'getMin') {
                    console.log(`getMin() -> ${minStack.getMin()}`);
                }
            } catch (error: any) {
                console.log(`Error: ${error.message}`);
            }
        });
        console.log('-'.repeat(100));
    });
}

runMinStackTests();
