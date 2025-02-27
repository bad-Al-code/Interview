class MyCircularDeque {
    private arr: number[];
    private front: number;
    private rear: number;
    private size: number;
    private capacity: number;

    constructor(k: number) {
        this.capacity = k;
        this.arr = new Array(k);
        this.front = 0;
        this.rear = -1;
        this.size = 0;
    }

    insertFront(value: number): boolean {
        if (this.isFull()) return false;
        this.front = (this.front - 1 + this.capacity) % this.capacity;
        this.arr[this.front] = value;
        this.size++;
        return true;
    }

    insertLast(value: number): boolean {
        if (this.isFull()) return false;

        this.rear = (this.rear + 1) % this.capacity;
        this.arr[this.rear] = value;
        this.size++;
        return true;
    }

    deleteFront(): boolean {
        if (this.isEmpty()) return false;
        this.front = (this.front + 1) % this.capacity;
        this.size--;
        return true;
    }

    deleteLast(): boolean {
        if (this.isEmpty()) return false;
        this.rear = (this.rear - 1 + this.capacity) % this.capacity;
        this.size--;
        return true;
    }

    getFront(): number {
        return this.isEmpty() ? -1 : this.arr[this.front];
    }

    getRear(): number {
        return this.isEmpty() ? -1 : this.arr[this.rear];
    }

    isEmpty(): boolean {
        return this.size === 0;
    }

    isFull(): boolean {
        return this.size === this.capacity;
    }
}

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
