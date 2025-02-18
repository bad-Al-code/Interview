class Solution {
    runningSums: number[];
    totalSum: number;
    constructor(w: number[]) {
        this.runningSums = [];
        let runningSum = 0;
        for (let weight of w) {
            runningSum += weight;
            this.runningSums.push(runningSum);
        }
        this.totalSum = runningSum;
    }

    pickIndex(): number {
        let target = Math.floor(Math.random() * this.totalSum) + 1;
        let low = 0;
        let high = this.runningSums.length;
        while (low < high) {
            let mid = Math.floor(low + (high - low) / 2);
            if (target > this.runningSums[mid]) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }
        return low;
    }
}
