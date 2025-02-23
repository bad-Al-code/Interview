interface INestedInteger {
    isInteger(): boolean;
    getInteger(): number | null;
    setInteger(value: number): void;
    add(ni: NestedInteger): void;
    getList(): NestedInteger[] | null;
}

class NestedInteger implements INestedInteger {
    private integer: number | null;
    private nList: NestedInteger[] | null;

    constructor(integer: number | null = null) {
        if (integer !== null) {
            this.integer = integer;
            this.nList = null;
        } else {
            this.integer = null;
            this.nList = [];
        }
    }

    isInteger(): boolean {
        return this.integer !== null;
    }

    getInteger(): number | null {
        return this.integer;
    }

    setInteger(value: number): void {
        this.nList = null;
        this.integer = value;
    }

    add(ni: NestedInteger): void {
        if (this.integer !== null) {
            this.nList = [new NestedInteger(this.integer)];
            this.integer = null;
        }
        this.nList!.push(ni);
    }

    getList(): NestedInteger[] | null {
        return this.nList;
    }
}

class NestedIterator {
    private stack: NestedInteger[];
    constructor(nestedList: NestedInteger[]) {
        this.stack = [...nestedList.reverse()];
    }

    hasNext(): boolean {
        while (this.stack.length > 0) {
            let top = this.stack[this.stack.length - 1];
            if (top.isInteger()) return true;

            let topList = this.stack.pop()!.getList();
            let i = topList!.length - 1;
            while (i >= 0) {
                this.stack.push(topList![i]);
                i -= 1;
            }
        }

        return false;
    }

    next(): number | null {
        if (this.hasNext()) {
            return this.stack.pop()!.getInteger();
        }

        return null;
    }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new NestedIterator(nestedList)
 * var a: number[] = []
 * while (obj.hasNext()) a.push(obj.next());
 */

function main() {
    let inputs = [
            '[1, [2, 3], 4]',
            '[3, [2, 3, 4], 4, [2, 3]]',
            '[[2, 3], 3, [2, 3], 4, [2, 3, 4, 5]]',
            '[1, [3, [4, [5, 6], 7], 8], 9]',
            '[[2, 3, [2, 3]]]',
        ],
        itr = [];

    // Test Case #1
    let nestedList = [];
    let l1 = new NestedInteger();
    nestedList.push(new NestedInteger(1));
    l1.add(new NestedInteger(2));
    l1.add(new NestedInteger(3));
    nestedList.push(l1);
    nestedList.push(new NestedInteger(4));
    itr.push(new NestedIterator(nestedList));

    // Test Case #2
    nestedList = [];
    let l2 = new NestedInteger();
    nestedList.push(new NestedInteger(3));
    l2.add(new NestedInteger(2));
    l2.add(new NestedInteger(3));
    l2.add(new NestedInteger(4));
    nestedList.push(l2);
    nestedList.push(new NestedInteger(4));
    nestedList.push(l1);
    itr.push(new NestedIterator(nestedList));

    // Test Case #3
    nestedList = [];
    let l3 = new NestedInteger();
    nestedList.push(l1);
    nestedList.push(new NestedInteger(3));
    l3.add(new NestedInteger(2));
    l3.add(new NestedInteger(3));
    l3.add(new NestedInteger(4));
    l3.add(new NestedInteger(5));
    nestedList.push(l1);
    nestedList.push(new NestedInteger(4));
    nestedList.push(l3);
    itr.push(new NestedIterator(nestedList));

    // Test case #4
    nestedList = [];
    nestedList.push(new NestedInteger(1));
    l1 = new NestedInteger();
    l1.add(new NestedInteger(5));
    l1.add(new NestedInteger(6));
    l2 = new NestedInteger();
    l2.add(new NestedInteger(4));
    l2.add(l1);
    l2.add(new NestedInteger(7));
    l3 = new NestedInteger();
    l3.add(new NestedInteger(3));
    l3.add(l2);
    l3.add(new NestedInteger(8));
    nestedList.push(l3);
    nestedList.push(new NestedInteger(9));
    itr.push(new NestedIterator(nestedList));

    // TEST CASE 5: [[2, 3, [2, 3]]]
    nestedList = [];
    l2 = new NestedInteger();
    l2.add(new NestedInteger(2));
    l2.add(new NestedInteger(3));
    l3 = new NestedInteger();
    l3.add(new NestedInteger(2));
    l3.add(new NestedInteger(3));
    l3.add(l2);
    nestedList.push(l3);
    itr.push(new NestedIterator(nestedList));

    for (let i = 0; i < itr.length; i++) {
        console.log(i + 1 + '.\tOriginal structure: ', inputs[i]);
        console.log('\n\tOutput:\n');
        while (itr[i].hasNext()) console.log('\titr.next(): ', itr[i].next());
        console.log('-'.repeat(100));
    }
}

main();
