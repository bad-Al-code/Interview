class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val: number, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
}

function removeDuplicatest(root: ListNode | null): ListNode | null {
    if (!root) {
        return null;
    }

    const hSet: Set<number> = new Set();
    let current: ListNode | null = root;
    let prev: ListNode | null = null;

    while (current) {
        if (hSet.has(current.val)) {
            prev!.next = current.next;
        } else {
            hSet.add(current.val);
            prev = current;
        }

        current = current.next;
    }

    return root;
}

function createLinkedList(arr: number[]): ListNode | null {
    if (arr.length === 0) return null;

    const head = new ListNode(arr[0]);
    let current = head;

    for (let i = 0; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

function printLinkedList(head: ListNode | null): void {
    const values: number[] = [];
    let current = head;

    while (current) {
        values.push(current.val);
        current = current.next;
    }

    console.log(values.join('->'));
}

const head = createLinkedList([1, 2, 2, 2, 3, 4, 4, 5, 6]);
console.log('Before removing duplicates:');
printLinkedList(head);

removeDuplicatest(head);
console.log('After removing duplicates:');
printLinkedList(head);
