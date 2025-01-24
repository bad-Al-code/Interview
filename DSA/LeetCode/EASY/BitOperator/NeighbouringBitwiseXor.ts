/**
 * Determines if a valid original binary array exists based on the derived array.
 * A valid original array exists if the XOR of all elements in the derived array is 0.
 *
 * @param {number[]} derived
 * @returns {boolean}
 *
 * @logic
 * The problem can be viewed as checking if the XOR of all derived values is 0.
 * Since XOR is its own inverse (a ^ a = 0), the derived array represents a sequence of XOR operations
 * that must sum up to 0 for a valid original array to exist.
 * If the XOR sum of all elements in the derived array is 0, then the original array exists; otherwise, it does not.
 */
function doesValidArrayExist(derived: number[]): boolean {
    const first = 0;
    let last = 0;

    for (let i = 0; i < derived.length; i++) {
        last ^= derived[i];
    }

    return first === last;
}
