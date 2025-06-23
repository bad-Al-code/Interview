/**
 * Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.
 * You should preserve the original relative order of the nodes in each of the two partitions.
 */

export class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function arrayToListNode(arr: number[]): ListNode | null {
    if (arr.length === 0) return null;
    const head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

function listNodeToArray(head: ListNode | null): number[] {
    const arr: number[] = [];
    let current = head;
    while (current !== null) {
        arr.push(current.val);
        current = current.next;
    }
    return arr;
}

function partition(head: ListNode | null, x: number): ListNode | null {
    const lessHeadDummy = new ListNode(0);
    let lessTail: ListNode = lessHeadDummy;

    const greaterOrEqualHeadDummy = new ListNode(0);
    let greaterOrEqualTail: ListNode = greaterOrEqualHeadDummy;

    let currentNode: ListNode | null = head;
    while (currentNode !== null) {
        console.log(`Processing node ${currentNode.val}`);
        const nextNodeInOriginalList: ListNode | null = currentNode.next;

        if (currentNode.val < x) {
            console.log(`${currentNode.val} < ${x} adding to less partition`);
            lessTail.next = currentNode;
            lessTail = currentNode;
        } else {
            console.log(
                `${currentNode.val} > ${x} adding to greaterOrEqualTail partition`,
            );
            greaterOrEqualTail.next = currentNode;
            greaterOrEqualTail = currentNode;
        }

        currentNode = nextNodeInOriginalList;
    }

    lessTail.next = greaterOrEqualHeadDummy.next;
    greaterOrEqualTail.next = null;

    return lessHeadDummy.next;
}
