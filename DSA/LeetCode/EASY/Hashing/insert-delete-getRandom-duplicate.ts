class RandomizedCollection {
  private list: number[];
  private valueToIndicesMap: Map<number, Set<number>>;

  constructor() {
    this.list = [];
    this.valueToIndicesMap = new Map<number, Set<number>>();
  }

  /**
   * Inserts an item val into the multiset, even if the item is already present. Returns true if the item is not present, false otherwise.
   * @param val 
   */
  insert(val: number): boolean {
    let indicesSet = this.valueToIndicesMap.get(val);
    let isItANewValue = false;

    if (indicesSet === undefined) {
      indicesSet = new Set<number>();
      this.valueToIndicesMap.set(val, indicesSet);
      isItANewValue = true;
    } else if (indicesSet.size === 0) {
      isItANewValue = true;
    }

    this.list.push(val);
    const newIndexInList = this.list.length - 1;
    indicesSet.add(newIndexInList);

    return isItANewValue;
  }

  /**
   * Removes an item val from the multiset if present. Returns true if the item is present, false otherwise. Note that if val has multiple occurrences in the multiset, we only remove one of them.
   * @param val 
   */
  remove(val: number): boolean {
    const indicesSetForVal = this.valueToIndicesMap.get(val);

    if (indicesSetForVal === undefined || indicesSetForVal.size === 0) { return false }

    const indexToRemove = indicesSetForVal.values().next().value as number;
    indicesSetForVal.delete(indexToRemove);

    const listLength = this.list.length;
    const lastElementInList = this.list[listLength - 1];
    const originalIndexOfLastElement = listLength - 1;

    if (indexToRemove === originalIndexOfLastElement) {
      this.list.pop();
    } else {
      this.list[indexToRemove] = lastElementInList;
      this.list.pop();

      const indicesSetForLastElement = this.valueToIndicesMap.get(lastElementInList)!;
      indicesSetForLastElement.delete(originalIndexOfLastElement);
      indicesSetForLastElement.add(indexToRemove);
    }

    return true;

  }

  getRandom(): number {
    const randomIndex = Math.floor(Math.random() * this.list.length);
    const randomElement = this.list[randomIndex];

    return randomElement;
  }
}


const randomizedCollection = new RandomizedCollection();

console.log(randomizedCollection.insert(1))
console.log(randomizedCollection.insert(1))
console.log(randomizedCollection.insert(2))
console.log(randomizedCollection.insert(2))
console.log(randomizedCollection.insert(2))
console.log(randomizedCollection.insert(2))
console.log(randomizedCollection.remove(2))
console.log(randomizedCollection.remove(2))
console.log(randomizedCollection.remove(2))
console.log(randomizedCollection.remove(2))
console.log(randomizedCollection.remove(2))
console.log(randomizedCollection.remove(2))
console.log(randomizedCollection.remove(2))
console.log(randomizedCollection.remove(2))
console.log(randomizedCollection.remove(2))
console.log(randomizedCollection.getRandom())
