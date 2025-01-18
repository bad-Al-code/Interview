class FindSumPairs {
    private nums1: number[];
    private nums2: number[];
    private mapCount: Map<number, number>;

    constructor(nums1: number[], nums2: number[]) {
        this.nums1 = nums1;
        this.nums2 = nums2;
        this.mapCount = new Map();

        for (const num of nums2) {
            this.mapCount.set(num, (this.mapCount.get(num) || 0) + 1);
        }
    }

    add(index: number, val: number): void {
        const oldValue = this.nums2[index];

        if (this.mapCount.has(oldValue)) {
            const oldFreq = this.mapCount.get(oldValue)!;
            if (oldFreq === 1) {
                this.mapCount.delete(oldValue);
            } else {
                this.mapCount.set(oldValue, oldFreq - 1);
            }
        }

        this.nums2[index] += val;
        const newVal = this.nums2[index];

        this.mapCount.set(newVal, (this.mapCount.get(newVal) || 0) + 1);
    }

    count(tot: number): number {
        let count = 0;
        for (let i of this.nums1) {
            let remaining = tot - i;

            if (this.mapCount.has(remaining)) {
                count += this.mapCount.get(remaining)!;
            }
        }
        return count;
    }
}

const nums1: number[] = [1, 1, 2, 2, 2, 3];
const nums2: number[] = [1, 4, 5, 2, 5, 4];

const pairs = new FindSumPairs(nums1, nums2);
console.log(pairs);
console.log(pairs.count(7));
console.log(pairs.add(3, 2));
console.log(pairs.count(8));
console.log(pairs.count(4));
console.log(pairs.add(0, 1));
console.log(pairs.add(1, 1));
console.log(pairs.count(7));
