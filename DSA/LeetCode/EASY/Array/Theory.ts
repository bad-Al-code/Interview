let myArray: number[] = [1, 2, 3];
let mySecondArray: number[] = [];

console.log(myArray);

/**
 * @description Add a single element at the end of an array using push()
 * @timeComplexity O(1) - Updates the length of the array and adds the new element
 */
mySecondArray.push(1, 5, 5);

console.log(mySecondArray);

/**
 * @description Remove the element from the end of the array using pop()
 * @timeComplexity O(1) - Updates the length of the array and removes the last element
 */
mySecondArray.pop();

console.log(mySecondArray);

/**
 * @description Remove and return the first element using shift()
 * @timeComplexity O(n) - Shifts all elements to the left and updates the length
 */
console.log(`First element removed: ${mySecondArray.shift()}`);

/**
 * @description Add an element at the beginning using unshift()
 * @timeComplexity O(n) - Shifts all elements to the right and adds the new element at index 0
 */
mySecondArray.unshift(123);

console.log(mySecondArray);

/**
 * @description Reverse the array
 * @timeComplexity O(n) - Traverses all elements of the array
 */
mySecondArray.reverse();

console.log(mySecondArray);

/**
 * @description Add or remove elements using splice()
 * @param firstIndex Index to start the splice operation
 * @param deleteCount Number of elements to remove
 * @timeComplexity O(n) - Shifts elements for adding or removing in the original array
 */
mySecondArray.splice(2, 0, 123213123); // Add at index 2
console.log(mySecondArray);

mySecondArray.splice(2, 3); // Remove 3 elements from index 2
console.log(mySecondArray);

/**
 * @description Slice out a piece of an array into a new array
 * @timeComplexity O(n) - Copies the specified range of elements into a new array
 */
let myThirdArray = mySecondArray.slice(2);
console.log(myThirdArray);

/**
 * @description Concatenate two arrays into a new array
 * @timeComplexity O(m+n) - Creates a new array and copies elements of both arrays
 */
let myFourthArray = myArray.concat(myThirdArray);
console.log(myFourthArray);

/**
 * @description Iterate over an array using for...of
 * @timeComplexity O(n) - Iterates over all elements in the array
 */
for (let element of myFourthArray) {
    console.log(element);
}
