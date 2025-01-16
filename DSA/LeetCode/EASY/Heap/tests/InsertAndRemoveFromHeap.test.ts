import { describe, it, expect } from 'vitest';

import Heap from '../InsertAndRemoveFromHeap';

describe('Heap', () => {
    it('should insert elements correctly using push', () => {
        const heap = new Heap();

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
        const heap = new Heap();

        expect(heap.pop()).toBe(-1);
    });

    it('should build a heap correctly using heapify', () => {
        const heap = new Heap();
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

    it('should handle push and pop in combination', () => {
        const heap = new Heap();
        heap.push(15);
        heap.push(10);
        heap.push(20);
        heap.push(5);

        expect(heap.pop()).toBe(5);
        heap.push(1);
        expect(heap.pop()).toBe(1);
        expect(heap.pop()).toBe(10);
        heap.push(30);
        expect(heap.pop()).toBe(15);
        expect(heap.pop()).toBe(20);
        expect(heap.pop()).toBe(30);
        expect(heap.pop()).toBe(-1);
    });
});
