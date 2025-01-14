# Heap

- useful in applications where you want to sort and implement priority queues.
- regular binary tree, with two properties:
    - Heap must be a complete binary trees
    - the nodes must be ordered according to the heap order property.

### Heap must be a complete binary trees

- A complete binary tree is a tree where each node has at most two chldren and the nodes at all levels are full,
  excepts for the leaf nodes which can be _empty_.

- Complete Binary Tree properties
    - all levels are either at depth d or depth d-1
    - leaves at depth d are to the left of the leaves at depth d-1
    - at most one node with just one child
    - if singular child exists, its the left child of its parent
    - if singular child exists, its the rightmost leaf at depth d

### The nodes must be ordered according to the Heap Order property

- min heap
- max heap

##### Min Heap

In Min-Heaps, all the parent node keys are less than or equal to their child node keys. So, the root node, in this case, will always contain the smallest element present in the Heap. If Node A has a child node B, then:

`key(A)<=key(B)`

##### Max Heap

All the parent node keys must be greater than or equal to their child node keys in max-heaps. So, the root node will always contain the largest element in the heap. If Node A has a child node B, then,

`key(A)>=key(B)`

### Where Heaps used?

- it returs smallest or largest element. We get this in O(1) time
- used to design **priority queues**
- _prims's algorithm, dijkstra's algorithm and heap sort algorithm_

### Heap Representations in Arrays

> In javascript, heap can be implemented using Arrays

- the index of each node is how much you’d count if you started from 0 at the root and went from left to right (level wise) in a tree. See the figure below to see how nodes are mapped to an array

##### Misconceptions

- heap are sometimes called binary heaps, becuase they are binary tress.
- also the heap data structure is not the same as heap memory.
- elements of heap are not sorted (**log bolenge they are sorted, but they are not**).

> one thing for sure is true about heap is, we get largest or smallest element in O(1) time as hamesha hame root node
> pe hi mil jata h.
