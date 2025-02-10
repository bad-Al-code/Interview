function findDuplicate(nums: number[]): number {
    let slow = nums[0];
    let fast = nums[0];

    while (true) {
        slow = nums[slow];
        fast = nums[nums[fast]];

        if (slow === fast) {
            break;
        }
    }

    slow = nums[0];
    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[slow];
    }

    return fast;
}

function main() {
    let nums = [
        [1, 3, 2, 3, 5, 4],
        [2, 4, 5, 4, 1, 3],
        [1, 6, 3, 5, 1, 2, 7, 4],
        [1, 2, 2, 4, 3],
        [3, 1, 3, 5, 6, 4, 2],
    ];

    for (let i = 0; i < nums.length; i++) {
        console.log(i + 1 + '.\tnums = ', nums[i]);
        console.log('\tDuplicate number = ', findDuplicate(nums[i]));
        console.log('-'.repeat(100));
    }
}

main();
