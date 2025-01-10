interface IArray {
    [index: number]: number;
    length: number;
}

function quickSort(arr: IArray, s: number, e: number): IArray {
    if (e - s + 1 <= 1) return arr;

    let pivot = arr[e];
    let left = s;

    function pivotPartition(index: number): void {
        if (index >= e) return;

        if (arr[index] < pivot) {
            const tmp = arr[left];
            arr[left] = arr[index];
            arr[index] = tmp;
            left++;
        }
        pivotPartition(index + 1);
    }

    pivotPartition(s);

    arr[e] = arr[left];
    arr[left] = pivot;

    quickSort(arr, s, left - 1);

    quickSort(arr, left + 1, e);

    return arr;
}

const arr10: IArray = [6, 2, 4, 1, 3];
console.log(quickSort(arr10, 0, arr10.length - 1));
