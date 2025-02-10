import chalk from 'chalk';

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
        if (values.length === 0) return;

        this.head = new ListNode(values[0]);
        let current = this.head;
        for (let i = 1; i < values.length; i++) {
            current.next = new ListNode(values[i]);
            current = current.next;
        }
    }
}

function printListWithForwardArrow(head: ListNode | null): string {
    let result = '';
    let current = head;
    while (current) {
        result += chalk.green(`${current.val}`) + chalk.gray(' → ');
        current = current.next;
    }
    return result + chalk.gray('null');
}

function compareTwoHalved(
    firstHalf: ListNode | null,
    secondHalf: ListNode | null,
): boolean {
    while (secondHalf) {
        if (!firstHalf || firstHalf.val !== secondHalf.val) {
            return false;
        }
        firstHalf = firstHalf.next;
        secondHalf = secondHalf.next;
    }

    return true;
}

function reverseLinkedList(head: ListNode | null): ListNode | null {
    let prev = null;
    let curr = head;

    while (curr) {
        let next: ListNode | null = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev;
}

function palindromeLinkedList(head: ListNode | null): boolean {
    if (!head || !head.next) return true;

    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast && fast.next) {
        slow = slow!.next;
        fast = fast.next.next;
    }

    const reversedSecondHalf = reverseLinkedList(slow!);

    let check = compareTwoHalved(head, reversedSecondHalf);

    if (check) {
        return true;
    }

    return false;
}

function main(): void {
    const input: number[][] = [
        [2, 4, 6, 4, 2],
        [0, 3, 5, 5, 0],
        [9, 7, 4, 4, 7, 9],
        [5, 4, 7, 9, 4, 5],
        [5, 9, 8, 3, 8, 9, 5],
    ];

    let testCaseNum = 1;

    for (let i = 0; i < input.length; i++) {
        let linkedList = new LinkedList();
        linkedList.createLinkedList(input[i]);

        console.log(
            chalk.blueBright(`${testCaseNum}.`) +
                chalk.bold(`\tLinked List = `) +
                printListWithForwardArrow(linkedList.head),
        );

        let head = linkedList.head;
        let result = palindromeLinkedList(head)
            ? chalk.greenBright('✅ Yes')
            : chalk.redBright('❌ No');

        console.log(chalk.bold('\tIs it a palindrome?'), result);
        console.log(chalk.gray('-'.repeat(100)), '\n');

        testCaseNum++;
    }
}

main();
