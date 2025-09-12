/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
function reverseLL(ptr) {
    let temp = null;
    let curr = ptr;
    let next = null;

    while (curr !== null) {
        next = curr.next;
        curr.next = temp;
        temp = curr;
        curr = next;
    }

    return temp;
}

function compare(one, another) {
    while (one !== null && another !== null
    ) {
        if (one.val !== another.val) return false;
        else { one = one.next; another = another.next }
    }

    return true;
}

function isPalindrome(head: ListNode | null): boolean {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let reversedLL = reverseLL(slow);
    let check = compare(head, reversedLL)

    reverseLL(reversedLL)

    if (check) return true;

    return false;
};
