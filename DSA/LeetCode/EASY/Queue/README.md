# QUEUE

- FIFO (First In First Out)

### When use queue?

- priortize something over another
- resource is shared between multiple devices.

- searching and sorting algorithms like Breadth First Search.
- Priority Queue: allows operating system to switch between approapriate processes.
- used for storing packets on routers ina certain order when a network i congested.

### Types

1. **Linear Queue**

2. **Circular Queue**
    - similar as linear queue
    - these are circular in the structure, which means both ends are connected to form a circle.
    - Initially, the front and the back point to the same location.
    - used for:
        - Simulation of obejects
        - Event handling (do something when a aprticular event occur).
3. **Priority Queue**
    - all element have priority associated wuth them and sorted such that the most priortize object appears at the front, and least priortize objects appears at the end of the queue.

- used in operating systems to determine which programs should begiven more priority.

```typescript
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    // Implementing this with dummy nodes would be easier!
    constructor() {
        this.left = null;
        this.right = null;
    }

    enqueue(val) {
        const newNode = new ListNode(val);
        if (this.right != null) {
            // Queue is not empty
            this.right.next = newNode;
            this.right = this.right.next;
        } else {
            // Queue is empty
            this.left = newNode;
            this.right = newNode;
        }
    }

    dequeue() {
        if (this.left == null) {
            // Queue is empty
            return;
        }
        // Remove left node and return value
        const val = this.left.val;
        this.left = this.left.next;
        return val;
    }

    print() {
        let cur = this.left;
        let s = '';
        while (cur != null) {
            s += cur.val + '->';
            cur = cur.next;
        }
        console.log(s);
    }
}
```
