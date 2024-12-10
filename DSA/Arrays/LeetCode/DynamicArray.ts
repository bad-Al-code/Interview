/**
 * Interface representing a dynamic array.
 */
interface IDynamicArray<T> {
    pushback(element: T): void;
    popback(): void;
    get(index: number): T | undefined;
    insert(index: number, element: T): void;
    print(): void;
}

/**
 * A generic dynamic array implementation thtat resize automatically as elements are added.
 * @template T - The type of elements in the array
 */
class DynamicArray<T> implements IDynamicArray<T> {
    private capacity: number;
    private length: number;
    private arr: Array<T | undefined>;

    constructor() {
        this.capacity = 2;
        this.length = 0;
        this.arr = Array<T | undefined>(2);
    }

    /**
     * Inserts an element at the end of the array
     * Resizes the array if the capacity is exceeded.
     * @param element - The element to insert
     */
    pushback(element: T): void {
        if (this.length === this.capacity) {
            this.resize();
        }

        this.arr[this.length] = element;
        this.length++;
    }

    /**
     * Resizes the internal array to double its current capacity.
     * Copies all exising elemenet to the new Array.
     */
    private resize(): void {
        this.capacity *= 2;
        const newArr = new Array<T | undefined>(this.capacity);

        for (let i = 0; i < this.length; i++) {
            newArr[i] = this.arr[i];
        }
        this.arr = newArr;
    }

    /**
     * Removes the last element from the array, if any.
     */
    popback(): void {
        if (this.length > 0) {
            this.arr[this.length - 1] = undefined;
            this.length--;
        }
    }

    /**
     * Retrieves the value at the specified index.
     * @param index - The index to retrieve the value from.
     * @returns The value at the specified index or undefined if out of bounds.
     */
    get(index: number): T | undefined {
        if (index < this.length) {
            return this.arr[index];
        }
        return undefined; // Out of bounds
    }

    /**
     * Inserts an element at the specified index, replacing the existing element.
     * @param index - The index at which to insert the element.
     * @param element - The element to insert.
     */
    insert(index: number, element: T): void {
        if (index < this.length) {
            this.arr[index] = element;
        }
    }

    /**
     * Prints all elements of the array up to the current length.
     */
    print(): void {
        const output = this.arr.slice(0, this.length).join(' ');
        console.log(output);
    }
}

export default DynamicArray;
