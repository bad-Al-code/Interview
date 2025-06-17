/**
 *Given the head of a singly linked list, sort the list using insertion sort, and return the sorted list's head.

The steps of the insertion sort algorithm:

Insertion sort iterates, consuming one input element each repetition and growing a sorted output list.
At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list and inserts it there.
It repeats until no input elements remain.
The folowing is a graphical example of the insertion sort algorithm. The partially sorted list (black) initially contains only the first element in the list. One element (red) is removed from the input data and inserted in-place into the sorted list with each iteration.
 */

export class ListNode {
    public val: number;
    public next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

export class LinkedList {
    private head: ListNode | null;

    constructor(head?: ListNode | null) {
        this.head = head === undefined ? null : head;
    }

    public static fromArray(arr: number[]): LinkedList {
        if (arr.length === 0) {
            return new LinkedList();
        }

        const head = new ListNode(arr[0]);
        let current = head;
        for (let i = 1; i < arr.length; i++) {
            current.next = new ListNode(arr[i]);
            current = current.next;
        }

        return new LinkedList(head);
    }

    public toArray(): number[] {
        const result: number[] = [];
        let current = this.head;
        while (current !== null) {
            result.push(current.val);
            current = current.next;
        }

        return result;
    }

    public insertionSort(): void {
        if (!this.head || !this.head.next) {
            return;
        }

        const dummyHead = new ListNode(Number.MIN_SAFE_INTEGER);
        let current = this.head;

        while (current !== null) {
            const nextNodeToProcess = current.next;

            let prev = dummyHead;
            while (prev.next !== null && prev.next.val < current.val) {
                prev = prev.next;
            }

            current.next = prev.next;
            prev.next = current;
            current = nextNodeToProcess!;
        }

        this.head = dummyHead.next;
    }

    public getHead(): ListNode | null {
        return this.head;
    }
}

function insertionSortList(head: ListNode | null): ListNode | null {
    if (!head) {
        return null;
    }

    const list = new LinkedList(head);

    list.insertionSort();

    return list.getHead();
}

const nums = [-1, 5, 3, 4, 0];
const listToSort = LinkedList.fromArray(nums);
const sortedHead = insertionSortList(listToSort.getHead());
const sortedList = new LinkedList(sortedHead);
console.log(sortedList.toArray());
