/**
 * Represents a StaticArray class that provides utility methods
 * for basic array operations with fixed capacity.
 * @template T - The type of elements in the array.
 */
class StaticArray<T> {
    /**
     * Inserts an element at the end of the array if capacity allows.
     * @param arr - The array to operate on.
     * @param element - The element to insert.
     * @param length - The current length of the array.
     * @param capacity - The maximum capacity of the array.
     * @returns The updated length of the array.
     */
    insertEnd(arr: T[], element: T, length: number, capacity: number): number {
        if (length < capacity) {
            arr[length] = element;
            length++;
        }
        return length;
    }

    /**
     * Removes the last element of the array if it's not empty.
     * @param arr - The array to operate on.
     * @param length - The current length of the array.
     * @returns The updated length of the array.
     */
    removeEnd(arr: T[], length: number): number {
        if (length > 0) {
            arr[length - 1] = undefined as unknown as T; // Safely handle resetting the element.
            length--;
        }
        return length;
    }

    /**
     * Inserts an element at the specified index in the array.
     * Shifts subsequent elements to the right.
     * @param arr - The array to operate on.
     * @param index - The index at which to insert the element.
     * @param element - The element to insert.
     * @param length - The current length of the array.
     * @returns The updated length of the array.
     */
    insertMiddle(arr: T[], index: number, element: T, length: number): number {
        for (let i = length - 1; i >= index; i--) {
            arr[i + 1] = arr[i];
        }
        arr[index] = element;
        length++;
        return length;
    }

    /**
     * Removes an element from the specified index in the array.
     * Shifts subsequent elements to the left.
     * @param arr - The array to operate on.
     * @param index - The index of the element to remove.
     * @param length - The current length of the array.
     * @returns The updated length of the array.
     */
    removeMiddle(arr: T[], index: number, length: number): number {
        for (let i = index + 1; i < length; i++) {
            arr[i - 1] = arr[i];
        }
        length--;
        return length;
    }

    /**
     * Prints the elements of the array up to the specified length.
     * @param arr - The array to operate on.
     * @param length - The current length of the array.
     */
    printArr(arr: T[], length: number): void {
        const output = arr.slice(0, length).join(' ');
        console.log(output);
    }
}

export default StaticArray;

const staticArray = new StaticArray<string>();
let arr = new Array<string>(10).fill('');
let length = 0;
const capacity = 10;

length = staticArray.insertEnd(arr, 'hello', length, capacity);
length = staticArray.insertEnd(arr, 'world', length, capacity);
staticArray.printArr(arr, length);
