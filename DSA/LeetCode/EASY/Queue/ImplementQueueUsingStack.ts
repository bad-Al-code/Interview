class MyQueue {
    private stack1: number[];
    private stack2: number[];

    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    /**
     * Pushed the elemnt to the back of the queue
     *
     * @param {number} x - The element to be pushed.
     */
    push(x: number): void {
        this.stack1.push(x);
    }

    private transferElement(): void {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop()!);
            }
        }
    }

    /**
     * Removes and returns the element from the front of the queue
     *
     * @returns {number} The from element of the queue
     */
    pop(): number {
        this.transferElement();

        return this.stack2.pop()!;
    }

    /**
     * Returns the front element of the queue
     *
     * @returns {number} - Front element of the queue
     */
    peek(): number {
        this.transferElement();

        return this.stack2[this.stack2.length - 1];
    }

    /**
     * Returns whether the queue is empty
     *
     * @returns {boolean} queue is empty.
     */
    isEmpty(): boolean {
        return this.stack1.length === 0 && this.stack2.length === 0;
    }
}

const obj = new MyQueue();
obj.push(1);
obj.push(2);
console.log(obj.peek());
console.log(obj.pop());
console.log(obj.isEmpty());
