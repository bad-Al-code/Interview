import { describe, it, expect } from 'vitest';
import { countNames } from '../Hash';

describe('countNames', () => {
    it('should return an empty map for an empty array', () => {
        const names: string[] = [];
        const result = countNames(names);
        expect(result.size).toBe(0);
    });

    it('should correctly count unique names', () => {
        const names: string[] = ['Aarav', 'Ananya', 'Ishaan'];
        const result = countNames(names);
        expect(result.get('Aarav')).toBe(1);
        expect(result.get('Ananya')).toBe(1);
        expect(result.get('Ishaan')).toBe(1);
    });

    it('should correctly count duplicate names', () => {
        const names: string[] = [
            'Aarav',
            'Ananya',
            'Ananya',
            'Aarav',
            'Ishaan',
        ];
        const result = countNames(names);
        expect(result.get('Aarav')).toBe(2);
        expect(result.get('Ananya')).toBe(2);
        expect(result.get('Ishaan')).toBe(1);
    });

    it('should handle case sensitivity (case-insensitive names)', () => {
        const names: string[] = ['Aarav', 'aarav', 'AARAV'];
        const result = countNames(names);
        expect(result.get('Aarav')).toBe(1);
        expect(result.get('aarav')).toBe(1);
        expect(result.get('AARAV')).toBe(1);
    });

    it('should handle long arrays correctly', () => {
        const names: string[] = Array(1000).fill('Aarav');
        const result = countNames(names);
        expect(result.get('Aarav')).toBe(1000);
    });
});
