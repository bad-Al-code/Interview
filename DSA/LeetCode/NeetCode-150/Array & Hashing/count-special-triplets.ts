function specialTriplets(nums: number[]): number {
    let count = 0;

    const n = nums.length;
    const MOD = 1_000_000_007;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                const middle = nums[j] * 2;
                if (nums[i] === middle && nums[k] === middle) {
                    count = (count + 1) % MOD;
                }
            }
        }
    }

    return count;
}

const MOD = 1_000_000_007;
const MAX_VAL = 100001;
function specialTripletsOptimized(nums: number[]): number {
    const n = nums.length;
    const rightFreq = buildFreq(nums);
    const leftFreq = new Int32Array(MAX_VAL).fill(0);

    let total: number = 0;

    for (const curr of nums) {
        rightFreq[curr]--;

        const target = curr * 2;

        if (isValid(target)) {
            const leftCount = leftFreq[target];
            const rightCount = rightFreq[target];

            if (leftCount > 0 && rightCount > 0) {
                const combinations = leftCount * rightCount;
                total = (total + combinations) % MOD;
            }
        }

        leftFreq[curr]++;
    }

    return total;
}

function buildFreq(nums: number[]): number[] {
    const freq = new Int32Array(MAX_VAL).fill(0);
    for (const num of nums) {
        freq[num]++;
    }

    return freq as unknown as number[];
}

function isValid(target: number): boolean {
    return target < MAX_VAL;
}
