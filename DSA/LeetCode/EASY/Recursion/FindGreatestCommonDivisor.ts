/**
 * Calculates the greatest common divisor (GCD) of two numbers using the Euclidean algorithm.
 *
 * @param {number} testVariable1 - The first number.
 * @param {number} testVariable2 - The second number.
 * @returns {number} - The greatest common divisor of the two numbers.
 *
 * @example
 * const result = gcd(48, 18); // 6
 *
 * @logic
 * - If both numbers are equal, their GCD is the number itself.
 * - If one number is greater, subtract the smaller number from the larger and recursively calculate the GCD.
 * - This process continues until both numbers are equal.
 *
 * @timeComplexity O(max(testVariable1, testVariable2)) - In the worst case, this approach involves subtracting smaller values from the larger one, which is less efficient compared to the optimized version.
 * @spaceComplexity O(n) - Space required for the recursive call stack, proportional to the number of recursive calls.
 */
function gcd(testVariable1: number, testVariable2: number): number {
    if (testVariable1 === testVariable2) return testVariable1;

    if (testVariable1 > testVariable2) {
        return gcd(testVariable1 - testVariable2, testVariable2);
    } else {
        return gcd(testVariable1, testVariable2 - testVariable1);
    }
}

/**
 * Calculates the greatest common divisor (GCD) of two numbers using the Euclidean algorithm (iterative approach).
 *
 * @param {number} testVariable1 - The first number.
 * @param {number} testVariable2 - The second number.
 * @returns {number} - The greatest common divisor of the two numbers.
 *
 * @example
 * const result = gcdIterative(48, 18); // 6
 *
 * @logic
 * - While the two numbers are not equal, repeatedly subtract the smaller number from the larger one.
 * - The process continues until both numbers are equal, which is the GCD.
 * - This iterative approach eliminates the need for recursive calls.
 *
 * @timeComplexity O(max(testVariable1, testVariable2)) - In the worst case, involves multiple subtractions, similar to the recursive approach.
 * @spaceComplexity O(1) - Constant space as no recursive stack is used.
 */
function gcdIterative(testVariable1: number, testVariable2: number): number {
    while (testVariable1 !== testVariable2) {
        if (testVariable1 > testVariable2) {
            testVariable1 -= testVariable2;
        } else {
            testVariable2 -= testVariable1;
        }
    }

    return testVariable1;
}
