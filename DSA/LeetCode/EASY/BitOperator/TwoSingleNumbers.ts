let twoSingleNumbers = function (arr: number[]): number[] {
    let bitwiseSum = 0;

    for (let i = 0; i < arr.length; i++) {
        bitwiseSum ^= arr[i];
    }

    let bitwiseMask = bitwiseSum & -bitwiseSum;

    let results = 0;

    for (let i = 0; i < arr.length; i++) {
        if (bitwiseMask & arr[i]) {
            results = results ^ arr[i];
        }
    }

    return [results, bitwiseSum ^ results];
};

function main() {
    const lists = [
        [1, 2, 2, 3],
        [4, 4, 3, 2, 3, 5],
        [1, 1, 7, 4, 5, 5, 8, 8],
        [1, 0],
        [9, 8, 8, 7, 6, 6, 4, 4],
    ];

    for (let i = 0; i < lists.length; i++) {
        console.log(i + 1 + '. \t Input list: ', lists[i]);
        console.log(
            '\t Two Singles numbers in a list: ',
            twoSingleNumbers(lists[i]),
        );
        console.log('-'.repeat(98));
    }
}

main();
