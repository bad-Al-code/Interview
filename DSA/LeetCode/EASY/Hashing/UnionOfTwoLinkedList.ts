export class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val: number, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
}

function createLinkedList(arr: number[]): ListNode | null {
    if (arr.length === 0) {
        return null;
    }

    const head = new ListNode(arr[0]);
    let current = head;

    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }

    return head;
}

function addToHSet(head: ListNode | null, hSet: Set<number>): void {
    let current = head;
    while (current) {
        hSet.add(current.val);
        current = current.next;
    }
}

function union(
    list1: ListNode | null,
    list2: ListNode | null,
): ListNode | null {
    const hSet: Set<number> = new Set();

    addToHSet(list1, hSet);
    addToHSet(list2, hSet);

    const arr = Array.from(hSet);

    return createLinkedList(arr);
}

function printLinkedList(head: ListNode | null): void {
    const arr: number[] = [];

    let current = head;

    while (current) {
        arr.push(current.val);
        current = current.next;
    }

    console.log(arr.join('->'));
}

const list1 = createLinkedList([10, 20, 80, 60]);
const list2 = createLinkedList([15, 20, 30, 60, 45]);

console.log('List 1:');
printLinkedList(list1);

console.log('List 2:');
printLinkedList(list2);

const unionList = union(list1, list2);
console.log('Union:');
printLinkedList(unionList);
