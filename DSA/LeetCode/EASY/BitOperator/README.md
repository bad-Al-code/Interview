# Bitwise

- process of modifying bits algorithmically using bitwise operations.
- bitwise operation work on a _bit string, bit array, or a binary numeral._

    **NOT(~)** This is a unary operator. If the argument is a 1-bit, flip it to change a 1 to a 0, and vice versa. If the argument is a string of bits, all bits in the string are reversed, turning 1's into 0's and vice versa.
    **AND(&)** | If both the bits are 1, then 1 is returned. Otherwise, 0 is returned.
    **OR(|)** If either of the bits is 1, then 1 is returned. Otherwise, 0 is returned.
    **XOR(^)** If both bits are equal, then 0 is returned. Otherwise, 1 is returned.

### When to use?

- input data can be manipulated at the level of the primitives bitwise logical operations.
- The input data is unsorted, and the answer seems to require sorting, but we want to do better than `O(nlogn)`.
