export class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val: number, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
}

class LinkedList {
    head: ListNode | null = null;

    createLinkedList(values: number[]): void {
        values.reverse().forEach((element) => {
            let newNode = new ListNode(values[element]);
            this.insertNodeAtHead(newNode);
        });
    }

    insertNodeAtHead(node: ListNode): void {
        if (this.head) {
            node.next = this.head;
            this.head = node;
        } else {
            this.head = node;
        }
    }

    display(): string {
        let result = '';
        let temp = this.head;
        while (temp) {
            result += temp.val;
            temp = temp.next;

            if (temp) {
                result += ', ';
            }
        }

        result += '';
        return result;
    }
}

function reverseList(
    head: ListNode | null,
    left: number,
    right: number,
): ListNode | null {
    let curr: ListNode | null = head;
    let prev: ListNode | null = null;
    let next: ListNode | null = null;

    while (right >= left) {
        next = curr!.next;
        curr!.next = prev;
        prev = curr;
        curr = next;

        right--;
    }

    return prev;
}

function reverseBetween(
    head: ListNode | null,
    left: number,
    right: number,
): ListNode | null {
    if (!head || !head.next) return head;

    let curr: ListNode | null = head;
    let lpn: ListNode | null = null;
    let rightN: ListNode | null = null;
    let reverseHead: ListNode | null = null;

    let count = 1;

    while (count < left && curr) {
        lpn = curr;
        curr = curr.next;
        count++;
    }

    if (curr) {
        let rpn: ListNode | null = curr;
        while (count <= right && rpn) {
            rightN = rpn;
            rpn = rightN.next;

            count++;
        }

        if (rightN) {
            reverseHead = reverseList(curr, left, right);
        }

        if (lpn) {
            lpn.next = reverseHead;
        }
        if (rpn) {
            let tmp: ListNode | null = reverseHead;
            while (tmp?.next) {
                tmp = tmp.next;
            }

            tmp!.next = rpn;
        }
    }

    if (lpn) {
        return head;
    } else {
        return reverseHead;
    }
}

function reorderList(head: ListNode | null): ListNode | null {
    if (!head) {
        return null;
    }

    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast && fast.next) {
        slow = slow!.next;
        fast = fast.next.next;
    }

    let next: ListNode | null = null;
    let prev: ListNode | null = null;
    let curr: ListNode | null = slow;

    while (curr) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    let first: ListNode | null = head;
    let second: ListNode | null = prev;

    while (second && second.next) {
        let temp1: ListNode | null = first!.next;
        let temp2: ListNode | null = second.next;

        first!.next = second;
        first = temp1;
        second.next = temp1;
        second = temp2;
    }

    return head;
}
