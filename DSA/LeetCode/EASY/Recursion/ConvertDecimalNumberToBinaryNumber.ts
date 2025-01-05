/**
 * @logic
 * keep track of remainder and the leftover divident when a number is divided bt 2.
 */
function decimalToBinary(a: number): string {
    if (a <= 1) return String(a);
    else {
        return decimalToBinary(Math.floor(a / 2)) + decimalToBinary(a % 2);
    }
}
