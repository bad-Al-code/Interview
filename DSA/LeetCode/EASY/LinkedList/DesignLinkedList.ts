class Node {
    value: number;
    next: Node | null;

    constructor(value: number) {
        this.value = this.value;
        this.next = null;
    }
}

class MyLinkedList {
    private head: Node | null;
    private size: number;

    constructor() {
        this.head = null;
        this.size = 0;
    }

    get(index: number): number {
        if (index < 0 || index >= this.size) {
            return -1;
        }
    }
}
