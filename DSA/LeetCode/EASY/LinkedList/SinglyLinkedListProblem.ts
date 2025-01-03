export class Node<T> {
    value: T;
    next: Node<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList<T> {
    private head: Node<T> | null;

    constructor() {
        this.head = null;
    }

    insertAtTail(value: T): void {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }

        current.next = newNode;
    }

    searchValue(value: T): Node<T> | null {
        let current = this.head;
        while (current) {
            if (current.value === value) return current;
            current = current.next;
        }

        return null;
    }

    deletionByValue(value: T): void {
        // if (!this.head) return;

        let current = this.head;
        while (current) {
            if (current.value === value) {
                current.next = current.next!.next;
            }
            current = current!.next;
        }
    }

    length(): number {
        let current = this.head;
        let length = 0;

        while (current) {
            length++;
            current = current!.next;
        }

        return length;
    }

    removeDuplicate(): Node<T> | null {
        if (!this.head) return null;
        if (!this.head.next) return this.head;

        let current = this.head;

        while (current.next) {
            let currentNext = current;
            while (currentNext) {
                if (
                    current.next !== null &&
                    currentNext.value === current.value
                ) {
                    currentNext.next = current.next.next;
                } else {
                    current = current.next!;
                }
            }
            current = current.next!;
        }

        return this.head;
    }

    nthNodeFromEnd(n: number): Node<T> | null {
        let current = this.head;
        let length = 0;

        while (current) {
            current = current.next;
            length++;
        }

        let nthPosition = length - n;
        if (nthPosition < 0 || nthPosition > length) {
            return null;
        }

        let nthNode = this.head;
        for (let i = 0; i < nthPosition; i++) {
            nthNode = nthNode!.next;
        }

        return nthNode;
    }
}
