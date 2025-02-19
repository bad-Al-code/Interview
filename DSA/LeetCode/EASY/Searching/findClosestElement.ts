function binarySearch(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        }

        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left;
}

function findClosestElements(arr: number[], k: number, x: number): number[] {
    if (arr.length === k) {
        return arr;
    }

    if (x <= arr[0]) {
        return arr.slice(0, k);
    }

    if (x >= arr[arr.length - 1]) {
        return nums.slice(arr.length - k);
    }

    const firstClosest = binarySearch(arr, x);

    let windowLeft = firstClosest - 1;
    let windowRight = windowLeft + 1;

    while (windowRight - windowLeft - 1 < k) {
        if (windowLeft === -1) {
            windowRight++;
            continue;
        }

        if (
            windowRight === arr.length ||
            Math.abs(arr[windowLeft] - x) <= Math.abs(arr[windowRight] - x)
        ) {
            windowLeft--;
        } else {
            windowRight++;
        }
    }

    return arr.slice(windowLeft + 1, windowRight);
}
