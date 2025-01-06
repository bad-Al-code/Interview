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
class Stack<T> {
	constructor() {
		this.items = [];
		this.top = null;
	}

	getTop() {
		if(this.items.length === 0) {
			return null;
		}
		return this.top()
	}

	isEmpty() {
		return this.items.length === 0;
	}

	size() {
		return this.items.length;
	}
}

const myStack = new Stack<number>();
```
