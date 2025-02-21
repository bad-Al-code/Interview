# Cyclic Sort

- in-place, unstable, comparison sort algorithm.

- It is based on the insight that subsequences of numbers in the input array that are not in sorted
  order actually describe cycles, and that the process of placing each number in its correct position
  removes these cycles.
- **CurrectIndex = CurrentValue - 1**
