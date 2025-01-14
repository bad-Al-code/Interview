# Max Heap

- key at the parent node is always greater than the keys at the child nodes.
- _Heap can be implemented using arrays._

- Initially, elements are placed in nodes in the same order as they appear in the array. Then a function is called over the whole heap in a bottom-up manner that “Max Heapifies” or “percolates up” on this heap so that the heap property is restored. The “Max Heapify” function is bottom-up because it starts comparing and swapping parent-child key values from the last parent (at the n22n​and index).
