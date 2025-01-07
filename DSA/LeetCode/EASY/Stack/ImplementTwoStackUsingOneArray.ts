class TwoStacks {
    private array: number[];
    private top1: number;
    private top2: number;
    private maxSize: number;

    /**
     * @param {number} size - Maximum size of the array
     */
    constructor(size: number) {
        this.maxSize = size;
        this.array = new Array(size);
        this.top1 = -1; // at the strt of the array
        this.top2 = size; // end of the array
    }

    /**
     * Push a value onto stack1
     * @param {number} value - value to push
     * @throws {Error} Throws an error if stack1 is full.
     */
    push1(value: number): void {
        if (this.top1 + 1 === this.top2) {
            throw new Error(
                'Stack Overflow: Cannot push to stack1 as it is full',
            );
        }

        this.top1++;
        this.array[this.top1] = value;
    }

    /**
     * Psuh on stack2
     * @param {number} value
     * @throws {Error} if stack2 is full
     */
    push2(value: number): void {
        if (this.top2 - 1 === this.top1) {
            throw new Error(
                'Stack Overflow: Cannot push to stack2 as it is full',
            );
        }

        this.top2--;
        this.array[this.top2] = value;
    }

    /**
     * Pop from stack1
     * @return  {number} - The value pooped from the stack1
     * @throws {Error} if stack1 is empty
     */
    pop1(): number {
        if (this.top1 === -1) {
            throw new Error(
                'Stack Overflow: Cannot pop to stack1 as it is full',
            );
        }

        const value = this.array[this.top1];
        this.top1--;
        return value;
    }

    /**
     * Pop from stack2
     * @returns {number} - Value popped from stack2
     * @throws {Error} if stack2 is empty
     */
    pop2(): number {
        if (this.top2 === this.maxSize) {
            throw new Error(
                'Stack Overflow: Cannot pop from stack2 as it is empty',
            );
        }

        const value = this.array[this.top2];
        this.top2++;
        return value;
    }

    /**
     * Current Size of stack1
     * @returns {number} - number of element in stack1
     */
    size1(): number {
        return this.top1 + 1;
    }

    /**
     * Return current size of stack2
     * @returns {number} Returns total number of element on stack2
     */
    size2(): number {
        return this.maxSize - this.top2;
    }
}

try {
    const stacks = new TwoStacks(10);

    stacks.push1(1);
    stacks.push1(2);
    stacks.push2(9);
    stacks.push2(8);

    console.log('Popped from stack1:', stacks.pop1());
    console.log('Popped from stack2:', stacks.pop2());

    stacks.push1(3);
    stacks.push2(7);

    console.log('Stack1 size:', stacks.size1());
    console.log('Stack2 size:', stacks.size2());
} catch (error: any) {
    console.error(error.message);
}
