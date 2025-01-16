import { vi, describe, it, expect, beforeEach } from 'vitest';

import Heap from '../InsertAndRemoveFromHeap';

describe('Heap', () => {
    let heap: Heap;

    beforeEach(() => {
        heap = new Heap();
    });

    it('should insert elements correctly using push', () => {
        heap.push(10);
        heap.push(5);
        heap.push(20);
        heap.push(1);

        expect(heap.pop()).toBe(1);
        expect(heap.pop()).toBe(5);
        expect(heap.pop()).toBe(10);
        expect(heap.pop()).toBe(20);
        expect(heap.pop()).toBe(-1);
    });

    it('should return -1 when popping from an empty heap', () => {
        expect(heap.pop()).toBe(-1);
    });

    it('should build a heap correctly using heapify', () => {
        const array = [5, 10, 3, 1, 4];
        heap.heapify(array);

        // The array should be converted into a min-heap
        expect(heap.pop()).toBe(1);
        expect(heap.pop()).toBe(3);
        expect(heap.pop()).toBe(4);
        expect(heap.pop()).toBe(5);
        expect(heap.pop()).toBe(10);
        expect(heap.pop()).toBe(-1);
    });

    it('should handle large numbers in the heap', () => {
        heap.push(Number.MAX_SAFE_INTEGER);
        heap.push(Number.MAX_SAFE_INTEGER);
        heap.push(0);

        expect(heap.pop()).toBe(0);
        expect(heap.pop()).toBe(Number.MAX_SAFE_INTEGER);
        expect(heap.pop()).toBe(Number.MAX_SAFE_INTEGER);
        expect(heap.pop()).toBe(-1);
    });

    it('should handle a single element in the heap', () => {
        heap.push(42);
        expect(heap.pop()).toBe(42);
        expect(heap.pop()).toBe(-1);
    });

    it('should handle heapify with an empty array gracefully', () => {
        const array: number[] = [];
        heap.heapify(array);

        expect(heap.pop()).toBe(-1);
    });

    const testCases = [
        { input: [10, 20, 15, 30], expected: [10, 15, 20, 30] },
        { input: [3, 2, 1, 4, 5], expected: [1, 2, 3, 4, 5] },
        { input: [100, 50, 75], expected: [50, 75, 100] },
    ];

    it.each(testCases)(
        'should maintain min-heap property for input: $input',
        ({ input, expected }) => {
            input.forEach((num) => heap.push(num));
            const result: number[] = [];
            while (true) {
                const popped = heap.pop();

                if (popped === -1) break;
                result.push(popped);
            }

            expect(result).toEqual(expected);
        },
    );

    it('should call heapify method with valid parameters', () => {
        const heapifySpy = vi.spyOn(heap, 'heapify');

        heap.heapify([1, 2, 3]);
        expect(heapifySpy).toHaveBeenCalledOnce();
        expect(() => heap.heapify([])).not.toThrow();
    });
});
