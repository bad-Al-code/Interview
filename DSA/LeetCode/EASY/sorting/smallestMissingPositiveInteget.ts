function smallestMissingPositiveInteger(nums: number[]): number {
    const numsLength = nums.length;
    let index = 0;

    while (index < numsLength) {
        const correctSpot = nums[index] - 1;
        if (
            correctSpot >= 0 &&
            correctSpot < numsLength &&
            nums[index] !== nums[correctSpot]
        ) {
            [nums[index], nums[correctSpot]] = [nums[correctSpot], nums[index]];
        } else if (correctSpot > numsLength) {
            index++;
        } else {
            index++;
        }
    }

    for (let i = 0; i < numsLength; i++) {
        if (i + 1 !== nums[i]) {
            return i + 1;
        }
    }

    return numsLength + 1;
}

function main() {
    let inputArray: number[][] = [
        [1, 2, 3, 4],
        [-1, 3, 5, 7, 1],
        [1, 5, 4, 3, 2],
        [-1, 0, 2, 1, 4],
        [1, 4, 3],
    ];
    let x = 1;

    for (let i = 0; i < inputArray.length; i++) {
        let current_inp = inputArray[i].slice();
        let res = smallestMissingPositiveInteger(inputArray[i]);
        console.log(
            x + '\tThe first missing positive integer in the list ',
            current_inp,
            ' is: ',
        );
        console.log('\t' + res);
        console.log('-'.repeat(100));
        x = x + 1;
    }
}

main();
