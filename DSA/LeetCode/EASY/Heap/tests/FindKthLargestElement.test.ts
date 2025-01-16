import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

import { findkthlargest, heapify } from '../FindKthLargestElement';

describe('Find Kth Smallest Element', () => {
    let heapifySpy: ReturnType<typeof vi.spyOn>;

    beforeEach(() => {
        heapifySpy = vi.spyOn({ heapify }, 'heapify');
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    const testCases = [
        { nums: [3, 2, 1, 5, 6, 4], k: 1, expected: 6 },
        { nums: [3, 2, 3, 1, 2, 4, 5, 5, 6], k: 4, expected: 4 },
        { nums: [10, 9, 8, 7, 6], k: 5, expected: 6 },
        { nums: [1], k: 1, expected: 1 },
        { nums: [7, 5, 2, 9, 11, 6], k: 3, expected: 7 },
    ];

    it.each(testCases)(
        'should find the kth largest element for input: $nums and k: $k',
        ({ nums, k, expected }) => {
            const result = findkthlargest(nums, k);

            expect(result).toBe(expected); // Validate result
        },
    );
    it('should handle arrays with duplicate elements', () => {
        const nums = [4, 4, 4, 4];
        const k = 2;
        const result = findkthlargest(nums, k);

        expect(result).toBe(4);
    });

    it('should throw an error when k is out of bounds (k > nums.length)', () => {
        const nums = [3, 2, 1];
        const k = 4;

        expect(() => findkthlargest(nums, k)).toThrowError(/out of bounds/i);
        expect(() => findkthlargest(nums, -1)).toThrowError(/positve integer/i);
    });

    it('should handle arrays with one element', () => {
        const nums = [10];
        const k = 1;
        const result = findkthlargest(nums, k);

        expect(result).toBe(10);
    });

    it('should handle arrays with negative numbers', () => {
        const nums = [-1, -3, -2, -4, -5];
        const k = 2;
        const result = findkthlargest(nums, k);

        expect(result).toBe(-2);
    });

    it('should clear all mocks properly', () => {
        expect(heapifySpy).not.toHaveBeenCalled();
    });
});
