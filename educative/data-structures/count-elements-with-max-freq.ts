class FrequencyAnalyzer {
  private frequencyMap: Map<number, number>;
  private maxFrequency: number;
  private totalMaxFrequencyCount: number;

  constructor(nums: number[]) {
    this.frequencyMap = new Map<number, number>();
    this.maxFrequency = 0;
    this.totalMaxFrequencyCount = 0;

    this.analyze(nums);
  }

  private analyze(nums: number[]): void {
    for (const num of nums) {
      const currentFrequency = (this.frequencyMap.get(num) || 0) + 1;
      this.frequencyMap.set(num, currentFrequency);

      if (currentFrequency > this.maxFrequency) {
        this.maxFrequency = currentFrequency;
        this.totalMaxFrequencyCount = currentFrequency;
      } else if (currentFrequency === this.maxFrequency) {
        this.totalMaxFrequencyCount += this.maxFrequency;
      }
    }
  }

  public getTotalMaxFrequencyCount(): number {
    return this.totalMaxFrequencyCount;
  }
}

function maxFrequencyElements(nums: number[]): number {
  const analyzer = new FrequencyAnalyzer(nums);

  return analyzer.getTotalMaxFrequencyCount();
}

console.log(`Input: [1, 2, 2, 3, 1, 4] -> Output: ${maxFrequencyElements([1, 2, 2, 3, 1, 4])}`);
console.log(`Input: [1, 2, 3, 4, 5] -> Output: ${maxFrequencyElements([1, 2, 3, 4, 5])}`);

console.log(`Input: [10, 12, 11, 10, 10] -> Output: ${maxFrequencyElements([10, 12, 11, 10, 10])}`); 
