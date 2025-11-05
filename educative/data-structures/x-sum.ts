type Comparator<T> = (a: T, b: T) => number;

class MyHeap<T> {
  private heap: T[] = [];
  private comparator: Comparator<T>;

  constructor(comparator: Comparator<T>) { this.comparator = comparator }
  size(): number {
    return this.heap.length;
  }

  peek(): T | undefined { return this.heap[0] };

  add(element: T): void {
    this.heap.push(element);
    this.heapifyUp(this.heap.length - 1);
  }

  remove(predicate: (element: T) => boolean): T | undefined {
    const index = this.heap.findIndex(predicate);
    if (index === -1) return undefined;
    if (index === this.size() - 1) return this.heap.pop();

    this.swap(index, this.size() - 1);
    const removed = this.heap.pop();
    const parentIndex = Math.floor((index - 1) / 2);
    if (index === 0 || this.comparator(this.heap[index], this.heap[parentIndex]) <= 0) {
      this.heapifyDown(index)
    } else {
      this.heapifyUp(index)
    }

    return removed;
  }

  poll(): T | undefined {
    if (this.size() === 0) return undefined;
    this.swap(0, this.size() - 1);

    const popped = this.heap.pop()
    if (this.size() > 0) { this.heapifyDown(0) }

    return popped;
  }

  private heapifyUp(index: number): void {
    let parentIndex = Math.floor(((index - 1) / 2));

    while (index > 0 && this.comparator(this.heap[index], this.heap[parentIndex]) > 0) {
      this.swap(index, parentIndex);
      index = parentIndex;
      parentIndex = Math.floor(((index - 1) / 2))
    }
  }

  private heapifyDown(index: number): void {
    let largest = index;
    let left = 2 * index + 1
    let right = 2 * index + 2;

    if (left < this.size() && this.comparator(this.heap[left], this.heap[largest]) > 0) {
      largest = left;
    }

    if (right < this.size() && this.comparator(this.heap[right], this.heap[largest]) > 0) {
      largest = right;
    }

    if (largest !== index) {
      this.swap(index, largest)
      this.heapifyDown(largest)
    }
  }

  private swap(i: number, j: number): void {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
  }
}

interface ElementFrequency {
  value: number;
  frequency: number;
}

interface XSumManagerState {
  freqMap: Map<number, number>;
  topXHeap: MyHeap<ElementFrequency>;
  restHeap: MyHeap<ElementFrequency>;
  elementToHeapRef: Map<number, MyHeap<ElementFrequency>>;
  topXSum: number;
  x: number;
}

const elementComparator: Comparator<ElementFrequency> = (a, b) => {
  if (a.frequency !== b.frequency) { return a.frequency - b.frequency }

  return a.value - b.value
}

function createXSumManager(x: number): XSumManagerState {
  const minHeapComparator: Comparator<ElementFrequency> = (a, b) => elementComparator(b, a);
  const maxHeapComparator: Comparator<ElementFrequency> = elementComparator;

  return {
    freqMap: new Map(),
    topXHeap: new MyHeap(minHeapComparator),
    restHeap: new MyHeap(maxHeapComparator),
    elementToHeapRef: new Map(),
    topXSum: 0, x: x
  }
}

function rebalanceHeaps(state: XSumManagerState): void {
  while (state.topXHeap.size() < state.x && state.restHeap.size() > 0) {
    const elementToMove = state.restHeap.poll()!;
    state.topXSum += elementToMove.value * elementToMove.frequency;
    state.topXHeap.add(elementToMove);
    state.elementToHeapRef.set(elementToMove.value, state.topXHeap)
  }

  while (state.topXHeap.size() > state.x) {
    const elementToMove = state.topXHeap.poll()!;
    state.topXSum -= elementToMove.value * elementToMove.frequency;
    state.topXHeap.add(elementToMove);
    state.elementToHeapRef.set(elementToMove.value, state.restHeap)
  }

  if (state.restHeap.size() > 0 && state.topXHeap.size() > 0) {
    const worstOfTop = state.topXHeap.peek()!
    const bestOfRest = state.restHeap.peek()!;

    if (elementComparator(bestOfRest, worstOfTop) > 0) {
      state.topXHeap.poll();
      state.restHeap.poll();

      state.topXSum -= worstOfTop.value * worstOfTop.frequency;
      state.topXSum += bestOfRest.value * bestOfRest.frequency;

      state.topXHeap.add(bestOfRest)
      state.restHeap.add(worstOfTop)

      state.elementToHeapRef.set(worstOfTop.value, state.restHeap);
      state.elementToHeapRef.set(bestOfRest.value, state.topXHeap);
    }
  }
}

function addOrUpdate(state: XSumManagerState, value: number): void {
  const oldFreq = state.freqMap.get(value) || 0;
  const newFreq = oldFreq + 1;
  state.freqMap.set(value, newFreq);

  const heapRef = state.elementToHeapRef.get(value);

  if (oldFreq > 0) {
    const oldEntry = heapRef!.remove(el => el.value === value)!
    if (heapRef === state.topXHeap) { state.topXSum -= oldEntry.value * oldEntry.frequency }
  }

  const newEntry: ElementFrequency = { value, frequency: newFreq };
  state.restHeap.add(newEntry);
  state.elementToHeapRef.set(value, state.restHeap)

  rebalanceHeaps(state);
}


function deleteOrUpdate(state: XSumManagerState, value: number): void {
  const oldFreq = state.freqMap.get(value)!;
  const newFreq = oldFreq - 1;

  const heapRef = state.elementToHeapRef.get(value)!;
  const oldEntry = heapRef.remove(el => el.value === value)!;
  if (heapRef === state.topXHeap) { state.topXSum -= oldEntry.value * oldEntry.frequency }

  if (newFreq > 0) {
    state.freqMap.set(value, newFreq);
    const newEntry: ElementFrequency = { value, frequency: newFreq };
    state.restHeap.add(newEntry);
    state.elementToHeapRef.set(value, state.restHeap)
  } else {
    state.freqMap.delete(value)
    state.elementToHeapRef.delete(value)
  }

  rebalanceHeaps(state);
}

function findXSum(nums: number[], k: number, x: number): number[] {
  const answer: number[] = [];
  const n = nums.length;
  const state = createXSumManager(x);

  for (let i = 0; i < k; i++) {
    addOrUpdate(state, nums[i])
  }

  const initialSum = state.freqMap.size < x ? Array.from(state.freqMap.entries()).reduce((sum, [val, freq]) => sum + val * freq, 0) : state.topXSum;

  answer.push(initialSum);

  for (let i = k; i < n; i++) {
    const out = nums[i - k];
    const inElement = nums[i];

    deleteOrUpdate(state, out);
    addOrUpdate(state, inElement);

    const currSum = state.freqMap.size < x ? Array.from(state.freqMap.entries())
      .reduce((sum, [val, freq]) => sum + val * freq, 0) : state.topXSum;

    answer.push(currSum)
  }

  return answer;
};