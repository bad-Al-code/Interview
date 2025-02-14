export class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val: number, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
}

export class LinkedList {
    head: ListNode | null = null;

    createLinkedList(arr: number[]): void {
        if (arr.length === 0) return;

        this.head = new ListNode(arr[0]);
        let current = this.head;

        for (let i = 0; i < arr.length; i++) {
            current.next = new ListNode(arr[i]);
            current = current.next;
        }
    }
}

export default function printListWithForwardArrow(
    head: ListNode | null,
): string {
    let result: string[] = [];
    let current = head;

    while (current !== null) {
        result.push(current.val.toString());
        current = current.next;
    }

    return result.join(' -> ') + ' -> null';
}

function merge2Lists(
    head1: ListNode | null,
    head2: ListNode | null,
): ListNode | null {
    let dummy = new ListNode(-1);
    let current = dummy;

    while (head1 && head2) {
        if (head1.val < head2.val) {
            current.next = head1;
            head1 = head1.next;
        } else {
            current.next = head2;
            head2 = head2.next;
        }

        current = current.next;
    }

    current.next = head1 ? head1 : head2;

    return dummy.next;
}

function mergeKLists(lists: LinkedList[]): ListNode | null {
    if (lists.length === 0) return null;

    let step = 1;
    while (step < lists.length) {
        for (let i = 0; i < lists.length - step; i = i + step * 2) {
            // lists[i] = merge2Lists(lists[i], lists[i + step]);
            lists[i].head = merge2Lists(lists[i].head, lists[i + step].head);
        }

        step *= 2;
    }

    // return lists[0] || null;
    return lists[0].head;
}

function main(): void {
    let inputLists: number[][][] = [
        [
            [21, 23, 42],
            [1, 2, 4],
        ],
        [
            [11, 41, 51],
            [21, 23, 42],
        ],
        [[2], [1, 2, 4], [25, 56, 66, 72]],
        [[11, 41, 51], [2], [2], [2], [1, 2, 4]],
        [
            [10, 30],
            [15, 25],
            [1, 7],
            [3, 9],
            [100, 300],
            [115, 125],
            [10, 70],
            [30, 90],
        ],
    ];

    let k = 1;

    inputLists.forEach((i) => {
        console.log(`${k}.\tInput lists:`);
        let llLists: LinkedList[] = [];

        i.forEach((x) => {
            let linkedList = new LinkedList();
            linkedList.createLinkedList(x);
            llLists.push(linkedList);
            console.log(`\t${printListWithForwardArrow(linkedList.head)}`);
        });

        k++;
        console.log('\tMerged list:');
        console.log(`\t${printListWithForwardArrow(mergeKLists(llLists))}`);
        console.log('-'.repeat(100));
    });
}

main();
