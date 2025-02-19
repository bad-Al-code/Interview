function singleNonDuplicate(arr: number[]): number {
    let l = 0;
    let r = arr.length - 1;

    while (l !== r) {
        let mid = l + Math.floor((r - l) / 2);
        if (mid % 2 === 1) {
            mid--;
        }

        if (arr[mid] === arr[mid + 1]) {
            l = mid + 2;
        } else {
            r = mid;
        }
    }

    return arr[l];
}

function singleNumber(nums: number[]): number {
    let result = 0;

    for (let num of nums) {
        result ^= nums[num];
    }

    return result;
}

function main() {
    let nums = [
        [1, 2, 2, 3, 3, 4, 4],
        [1, 1, 2, 2, 3, 4, 4, 5, 5],
        [1, 1, 2, 3, 3],
        [1, 1, 2],
        [0, 2, 2, 3, 3, 4, 4, 5, 5],
    ];

    for (let i = 0; i < nums.length; i++) {
        console.log(i + 1 + '.\tThe Array =', nums[i]);
        console.log('\tSingle Element Found:', singleNonDuplicate(nums[i]));
        console.log('-'.repeat(100));
    }
}
main();
