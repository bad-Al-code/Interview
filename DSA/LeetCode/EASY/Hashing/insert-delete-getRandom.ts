class RandomizedSet {
    private list: number[];
    private valueToIndexMap: Map<number, number>;

    constructor() {
       this.list = [];
       this.valueToIndexMap = new Map<number, number>(); 
    }

    insert(val: number): boolean {
      if(this.valueToIndexMap.has(val)) {
        return false;
      } 

      this.list.push(val);

      this.valueToIndexMap.set(val, this.list.length - 1);

      return true;
    }

    remove(val: number): boolean {
         if(!this.valueToIndexMap.has(val)) {
        return false;
      } 

      const indexToRemove : number = this.valueToIndexMap.get(val)!;
      const lastElementValue: number= this.list[this.list.length - 1]

      if(val === lastElementValue) {
        this.list.pop()
      this.valueToIndexMap.delete(val);
      }else {
        this.list[indexToRemove] = lastElementValue;
        this.valueToIndexMap.set(lastElementValue, indexToRemove);

        this.list.pop();

        this.valueToIndexMap.delete(val);
      }


      return true;
    }

    getRandom(): number {
       if(this.list.length === 0)  { throw new Error(`Cannot get random from an empty set.`)}
       const randomIndex = Math.floor(Math.random() * this.list.length);
       const randomElement = this.list[randomIndex];
       console.log(`Random Index: ${randomIndex}, raandom element: ${randomElement}`);

       return randomElement;
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

const randomizedSet = new RandomizedSet();

console.log(randomizedSet.insert(1));
console.log(randomizedSet.insert(2));
console.log(randomizedSet.insert(3));
console.log(randomizedSet.insert(1));
console.log(randomizedSet.remove(1));
console.log(randomizedSet.remove(1));
console.log(randomizedSet.getRandom());
console.log(randomizedSet.getRandom());