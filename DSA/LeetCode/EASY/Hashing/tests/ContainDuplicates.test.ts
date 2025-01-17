import { describe, it, expect } from 'vitest';
import { containsDuplicate } from '../ContainDuplicates';

describe('containsDuplicate', () => {
    it('should return true if there are duplicates', () => {
        const nums = [1, 2, 3, 4, 1];
        const result = containsDuplicate(nums);
        expect(result).toBe(true);
    });

    it('should return false if all elements are distinct', () => {
        const nums = [1, 2, 3, 4, 5];
        const result = containsDuplicate(nums);
        expect(result).toBe(false);
    });

    it('should return false for an empty array', () => {
        const nums: number[] = [];
        const result = containsDuplicate(nums);
        expect(result).toBe(false);
    });

    it('should return true if the array contains only one repeated element', () => {
        const nums = [2, 2];
        const result = containsDuplicate(nums);
        expect(result).toBe(true);
    });

    it('should return true if there are multiple duplicates', () => {
        const nums = [1, 1, 1, 2, 3, 4];
        const result = containsDuplicate(nums);
        expect(result).toBe(true);
    });

    it('should return false if all elements are unique even with larger input', () => {
        const nums = Array.from({ length: 1000 }, (_, i) => i);
        const result = containsDuplicate(nums);
        expect(result).toBe(false);
    });

    it('should return true for a large array with duplicates', () => {
        const nums = Array.from({ length: 1000 }, (_, i) =>
            i % 2 === 0 ? i : 1000,
        );
        const result = containsDuplicate(nums);
        expect(result).toBe(true);
    });
});
