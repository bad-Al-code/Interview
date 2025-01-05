/**
 * @logic
 * compare the first and last characters, if they are same, we call the function `checkPalindrome()` for the string
 * again, but with the first and last string removed.
 */
function checkPalindrome(a: string): boolean {
    if (a.length <= 1) return true;

    if (a[0] === a[a.length - 1]) {
        return checkPalindrome(a.substring(1, a.length - 1));
    }
    return false;
}
