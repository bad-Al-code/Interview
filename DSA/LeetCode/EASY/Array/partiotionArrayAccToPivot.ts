function pivotElementEfficient(nums: number[], pivot: number): number[] {
    const n = nums.length;
    const result = new Array(n).fill(0);

    let i = 0;
    let j = n - 1;
    let i1 = 0;
    let j1 = n - 1;

    while (i < n) {
        if (nums[i] < pivot) {
            result[i1] = nums[i];
            i1++;
        }
        if (nums[j] > pivot) {
            result[j1] = nums[j];
            j1--;
        }
        i++;
        j--;
    }

    while (i1 <= j1) {
        result[i1] = result[j1] = pivot;
        i1++;
        j1--;
    }

    return result;
}

function pivotArray(nums: number[], pivot: number): number[] {
    const smallerElements: number[] = [];
    const pivotElements: number[] = [];
    const largerElements: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < pivot) {
            smallerElements.push(nums[i]);
        } else if (nums[i] > pivot) {
            largerElements.push(nums[i]);
        } else {
            pivotElements.push(nums[i]);
        }
    }

    for (const element of smallerElements) {
        console.log('Smaller ', element);
    }
    console.log('-'.repeat(100));
    for (const element of largerElements) {
        console.log('Larger', element);
    }
    console.log('-'.repeat(100));
    for (const element of pivotElements) {
        console.log('Pivot', element);
    }
    console.log('-'.repeat(100));

    const result: number[] = smallerElements.concat(
        pivotElements.concat(largerElements),
    );

    return result;
}

export const nums = [9, 12, 5, 10, 14, 3, 10];
const pivot = 10;

console.log(pivotArray(nums, pivot));
console.log(pivotElementEfficient(nums, pivot));
