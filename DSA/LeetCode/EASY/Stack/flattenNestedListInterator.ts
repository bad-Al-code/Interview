class NestedInteger {
    constructor(value?: number) {}

    isInteger(): boolean {}

    getInteger(): number | null {}

    setInteger(value: number) {}

    add(elem: NestedInteger) {}

    getList(): NestedInteger[] {}
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
            let i = topList?.length - 1;
            while (i >= 0) {
                this.stack.push(topList[i]);
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
