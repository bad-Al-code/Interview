import { beforeEach, describe, it, expect } from 'vitest';
import { HashMap } from '../HashMap';

describe('HashMap', () => {
    let hashMap: HashMap<string, number>;

    beforeEach(() => {
        hashMap = new HashMap<string, number>();
    });

    it('should initialize with default capacity and size', () => {
        expect(hashMap).toBeTruthy();
        expect((hashMap as any).size).toBe(0);
        expect((hashMap as any).capacity).toBe(2);
    });

    describe('put()', () => {
        it('should insert a single key-value pair', () => {
            hashMap.put('key1', 1);
            expect(hashMap.get('key1')).toBe(1);
        });

        it('should overwrite the value for an existing key', () => {
            hashMap.put('key1', 1);
            hashMap.put('key1', 2);
            expect(hashMap.get('key1')).toBe(2);
        });

        it('should rehash when the load factor exceeds 0.5', () => {
            hashMap.put('key1', 1);
            hashMap.put('key2', 2);
            hashMap.put('key3', 3);
            expect((hashMap as any).capacity).toBe(8);
        });

        it('should handle collisions correctly', () => {
            hashMap.put('a', 1);
            hashMap.put('b', 2);
            expect(hashMap.get('a')).toBe(1);
            expect(hashMap.get('b')).toBe(2);
        });
    });

    describe('get()', () => {
        it('should return the correct value for an existing key', () => {
            hashMap.put('key1', 1);
            expect(hashMap.get('key1')).toBe(1);
        });

        it('should return null for a non-existing key', () => {
            expect(hashMap.get('key1')).toBeNull();
        });

        it('should return null for a removed key', () => {
            hashMap.put('key1', 1);
            hashMap.remove('key1');
            expect(hashMap.get('key1')).toBeNull();
        });
    });

    describe('remove()', () => {
        it('should remove a key-value pair', () => {
            hashMap.put('key1', 1);
            hashMap.remove('key1');
            expect(hashMap.get('key1')).toBeNull();
        });

        it('should handle removal of a non-existing key gracefully', () => {
            expect(() => hashMap.remove('key1')).not.toThrow();
        });

        it('should not break map functionality after removal', () => {
            hashMap.put('key1', 1);
            hashMap.put('key2', 2);
            hashMap.remove('key1');
            expect(hashMap.get('key2')).toBe(2);
        });
    });

    describe('rehash()', () => {
        it('should rehash when the load factor threshold is crossed', () => {
            hashMap.put('key1', 1);
            hashMap.put('key2', 2);
            hashMap.put('key3', 3);
            expect((hashMap as any).capacity).toBe(8);
            expect(hashMap.get('key1')).toBe(1);
            expect(hashMap.get('key2')).toBe(2);
            expect(hashMap.get('key3')).toBe(3);
        });

        it('should preserve all elements after rehashing', () => {
            hashMap.put('key1', 1);
            hashMap.put('key2', 2);
            hashMap.put('key3', 3);
            expect(hashMap.get('key1')).toBe(1);
            expect(hashMap.get('key2')).toBe(2);
            expect(hashMap.get('key3')).toBe(3);
        });
    });
});
