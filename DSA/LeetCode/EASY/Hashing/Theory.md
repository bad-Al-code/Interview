# Hashing

- used to store an object according to a unique key.
- hashing always creates a key-value pair.

### Hash Tables

- implemented using arrays as they provide access to constant in constant time.

## Hash Functions

- converts a large key into a smaller key.
- takes an item's key and returns the corresponding index in the array for that item.

- **Arithmetic Modular**

```bash
index = key MOD tableSize
```

```js
function hashModular(key, size) {
    return key % size;
}
```

- **Truncation**
    - use some part of the key

```js
function hashTrunc(key) {
    return key % 1000;
}
```

## Collisions

- two differenct keys may returns the same index.

##### Handle Collisions

- Open Addressing
    - if current index is filled, find the next index which is not filled.
- Chaining
    - for each slot of our hash table, we holds a pointer to a linked list.
- Resize the array
    - we set a threshold, once its crossed, increase the table size (roughly double)