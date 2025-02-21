function swap(arr: number[], first: number, second: number): void {
    [arr[first], arr[second]] = [arr[second], arr[first]];
}

function findCorruptPair(nums: number[]): (number | null)[] {
    const numsLength = nums.length;
    let missing = null;
    let duplicated = null;
    let index = 0;

    while (index < numsLength) {
        const correctSpot = nums[index] - 1;

        if (nums[index] !== nums[correctSpot]) {
            swap(nums, index, correctSpot);
        } else {
            index++;
        }
    }

    for (let i = 0; i < numsLength; i++) {
        if (nums[i] !== i + 1) {
            duplicated = nums[i];
            missing = i + 1;
        }
    }

    return [missing, duplicated];
}

function main() {
    let array: number[][] = [
        [3, 1, 2, 5, 2],
        [3, 1, 2, 3, 6, 4],
        [4, 1, 2, 1, 6, 3],
        [4, 3, 4, 5, 1],
        [5, 3, 5, 6, 2, 1],
    ];

    for (let i = 0; i < array.length; i++) {
        console.log(i + 1 + '.\tGiven array:', array[i]);
        let result = findCorruptPair(array[i]);
        console.log(`\n\tCorrupt pair: ${result[0]}, ${result[1]}`);
        console.log('-'.repeat(100));
    }
}

main();
