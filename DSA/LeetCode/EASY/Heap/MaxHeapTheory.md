# Max Heap

- key at the parent node is always greater than the keys at the child nodes.
- _Heap can be implemented using arrays._

- Initially, elements are placed in nodes in the same order as they appear in the array. Then a function is called over the whole heap in a bottom-up manner that “Max Heapifies” or “percolates up” on this heap so that the heap property is restored. The “Max Heapify” function is bottom-up because it starts comparing and swapping parent-child key values from the last parent (at the n22n​and index).

### Insertion

- create a new cild at the end of the heap
- place the nwe key at that node
- compare the value with its parent nodes
- if the key is greate thatn the key at the parrent node, swap values
- repeat until root node not reached.

### Remove

- Delete the root node
- Move the key of the last child node at the last level to root
- Now compare the key with its children
- If the key is smaller than the key at any of the child nodes, swap values
- If both keys at child nodes are greater than the parent node key, pick the larger one and see if the heap property is satisfied
- Repeat until you reach the last level
