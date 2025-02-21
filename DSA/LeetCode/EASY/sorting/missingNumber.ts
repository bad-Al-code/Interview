function findMissingNumber(nums: number[]): number {
    if (nums.length === 0) return 0;

    const numsLength = nums.length;
    let index = 0;

    while (index < numsLength) {
        let value = nums[index];

        if (value < numsLength && value !== nums[value]) {
            [nums[index], nums[value]] = [nums[value], nums[index]];
        } else if (value >= numsLength) {
            index += 1;
        } else {
            index += 1;
        }
    }

    for (let i = 0; i < numsLength; i++) {
        if (i !== nums[i]) {
            return i;
        }
    }

    return numsLength;
}

function main() {
    let inputnumbers: number[][] = [
        [4, 0, 3, 1],
        [8, 3, 5, 2, 4, 6, 0, 1],
        [1, 2, 3, 4, 6, 7, 8, 9, 10, 11],
        [0],
        [
            1, 2, 3, 0, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
            19, 20, 21, 23,
        ],
    ];

    let i = 1;
    inputnumbers.forEach((x) => {
        console.log(i + '.\tnums:', x);
        console.log('\n\tMissing number: ', findMissingNumber(x));
        console.log('-'.repeat(100));
        i += 1;
    });
}

main();
