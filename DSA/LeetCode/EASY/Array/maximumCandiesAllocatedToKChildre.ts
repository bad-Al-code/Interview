function maximumCandies(candies: number[], k: number): number {
    function canAllocate(candiesPerChild: number): boolean {
        let childrenAllocated = 0;
        for (const pile of candies) {
            childrenAllocated += Math.floor(pile / candiesPerChild);
            if (childrenAllocated >= k) {
                return true;
            }
        }

        return false;
    }

    let left = 1;
    let right = Math.max(...candies);

    let result = 0;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (canAllocate(mid)) {
            result = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return result;
}

console.log(maximumCandies([5, 8, 6], 3));
console.log(maximumCandies([4, 7, 5], 4));
console.log(maximumCandies([1, 2, 3, 4], 5));
console.log(maximumCandies([10, 10], 10));
