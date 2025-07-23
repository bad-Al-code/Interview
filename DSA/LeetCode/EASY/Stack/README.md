# Stack

- Last In First Out(LIFO); means that the least element added is the element in the top, and the first element added is at the bottom.

### What stack do?

- `push(element)` - inserts an element at the top
- `pop()` - Removes an elements from the top and returns it.
- `isEmpty()` - Returns a boolean 1 if the stack is empty.
- `getTop()` - Returns the element added most recently.

### How stack implemented?

- by using Arrays or Linked List.

Lets use Arrays:

```typesript
class Stack {
    constructor() {
        this.stack = new Array();
    }

    push(n) {
        this.stack.push(n);
    }

    pop() {
        return this.stack.pop();
    }

    size() {
        return this.stack.length;
    }
}
```

STack is nothing but an array. 