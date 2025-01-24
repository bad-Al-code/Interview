function singleNumber(nums: number[]): number {
    let res = 0;

    for (let i = 0; i < nums.length; i++) {
        res ^= nums[i];
    }
    return res;
}

function main() {
    const inputs = [
        [1, 2, 2, 3, 3, 1, 4],
        [2, 2, 1],
        [4, 1, 2, 1, 2],
        [-4, -1, -2, -1, -2],
        [25],
    ];

    for (let i = 0; i < inputs.length; i++) {
        console.log(
            i + 1 + '\tFinding the element which appeared once in the array: ',
            inputs[i],
        );
        console.log('\tResult: ', singleNumber(inputs[i]));
        console.log('-'.repeat(100));
    }
}

main();
