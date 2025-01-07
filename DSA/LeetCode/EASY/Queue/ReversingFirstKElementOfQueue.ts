/**
 * Reverses the first `k` elements of the queue.
 *
 * @param {number[]} queue - The queue to be modified (represented as an array).
 * @param {number} k - The number of elements to reverse from the front of the queue.
 * @returns {number[]} - The queue with the first `k` elements reversed.
 *
 * @example
 * const queue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 * const k = 5;
 * const result = reverseK(queue, k);
 * console.log(result); // Output: [5, 4, 3, 2, 1, 6, 7, 8, 9, 10]
 *
 * @logic
 * - First, dequeue the first `k` elements and store them in a temporary stack.
 * - Then, push the elements back in reverse order from the stack.
 * - Finally, maintain the remaining elements of the queue in their original order.
 *
 * @timeComplexity O(k) - We are dequeuing and enqueuing `k` elements.
 * @spaceComplexity O(k) - The stack uses space to hold the `k` elements temporarily.
 */
function reverseK(queue: number[], k: number): number[] {
    if (k <= 0 || k > queue.length) return queue;

    let stack: number[] = [];

    for (let i = 0; i < k; i++) {
        stack.push(queue.shift()!);
    }

    while (stack.length > 0) {
        queue.unshift(stack.pop()!);
    }

    return queue;
}

/**
 * Reverses the first `k` elements of the queue using two queues.
 *
 * @param {number[]} queue - The queue to be modified (represented as an array).
 * @param {number} k - The number of elements to reverse from the front of the queue.
 * @returns {number[]} - The queue with the first `k` elements reversed.
 *
 * @example
 * const queue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 * const k = 5;
 * const result = reverseK(queue, k);
 * console.log(result); // Output: [5, 4, 3, 2, 1, 6, 7, 8, 9, 10]
 *
 * @logic
 * - We use two queues to reverse the first `k` elements:
 *   1. First, dequeue `k` elements from the original queue.
 *   2. Then, enqueue the reversed `k` elements into the queue in reverse order.
 *   3. Finally, maintain the remaining elements in the original order.
 *
 * @timeComplexity O(k) - We are dequeuing and enqueuing `k` elements.
 * @spaceComplexity O(k) - The space is used to hold the temporary elements for reversal.
 */
function reverseKUSingQueue(queue: number[], k: number): number[] {
    if (k <= 0 || k > queue.length) return queue; // Edge case handling

    // Step 1: Dequeue the first `k` elements and store them in a temporary queue
    let tempQueue: number[] = [];

    // Step 2: Reverse the first `k` elements by using the temporary queue
    for (let i = 0; i < k; i++) {
        tempQueue.push(queue.shift()!); // Shift removes the first element from the original queue
    }

    // Step 3: Add the reversed `k` elements back to the original queue
    while (tempQueue.length > 0) {
        queue.unshift(tempQueue.pop()!); // Pop removes the last element from the temporary queue and unshift adds it to the front
    }

    // Step 4: Add the remaining elements back to the queue in the same order
    // The remaining elements are still in their original order in the queue
    return queue;
}

/**
 * Reverses the first `k` elements of the queue in place using two pointers.
 *
 * @param {number[]} queue - The queue to be modified (represented as an array).
 * @param {number} k - The number of elements to reverse from the front of the queue.
 * @returns {number[]} - The queue with the first `k` elements reversed.
 *
 * @example
 * const queue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 * const k = 5;
 * const result = reverseK(queue, k);
 * console.log(result); // Output: [5, 4, 3, 2, 1, 6, 7, 8, 9, 10]
 *
 * @logic
 * - Use two pointers, one at the start of the queue and the other at the kth element.
 * - Swap the elements at these two pointers and move the pointers towards the center.
 * - Continue swapping until the pointers cross.
 *
 * @timeComplexity O(k) - We only swap `k` elements.
 * @spaceComplexity O(1) - No additional space is used.
 */
function reverseKWithoutSpace(queue: number[], k: number): number[] {
    let left = 0;
    let right = k - 1;

    while (left < right) {
        [queue[left], queue[right]] = [queue[right], queue[left]];

        left++;
        right--;
    }

    return queue;
}

const queue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const a = 5;
const result1 = reverseK(queue, a);
const result2 = reverseKUSingQueue(queue, a);
console.log(result1);
console.log(result2);
