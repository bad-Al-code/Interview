import { describe, it, expect } from 'vitest';
import { twoSum } from '../TwoSum';

describe('twoSum', () => {
    it('should return the correct indices when a solution exists', () => {
        const nums = [2, 7, 11, 15];
        const target = 9;
        const result = twoSum(nums, target);
        expect(result).toEqual([0, 1]);
    });

    it('should return the correct indices for negative numbers', () => {
        const nums = [-1, -2, -3, -4, -5];
        const target = -8;
        const result = twoSum(nums, target);
        expect(result).toEqual([2, 4]);
    });

    it('should return the correct indices when the solution is at the end of the array', () => {
        const nums = [3, 2, 4];
        const target = 6;
        const result = twoSum(nums, target);
        expect(result).toEqual([1, 2]);
    });

    it('should return the correct indices for the same number twice', () => {
        const nums = [3, 3];
        const target = 6;
        const result = twoSum(nums, target);
        expect(result).toEqual([0, 1]);
    });

    it('should throw an error if no solution exists (although the problem guarantees a solution)', () => {
        const nums = [1, 2, 3];
        const target = 7;
        try {
            twoSum(nums, target);
        } catch (error: any) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toBe('No solution found');
        }
    });
});
