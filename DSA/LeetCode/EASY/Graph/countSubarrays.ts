class MaxElementSubarrayCounter {
  private readonly nums: number[];
  private readonly k: number;
  private readonly n: number;
  private maxVal: number = -Infinity;

  constructor(nums: number[], k: number) {
    if(k <=0) {
      throw new Error(`Constrains voilation: k must be positive`);
    }

    this.nums = nums;
    this.k = k;
    this.n = nums.length;
  this._findMaxValue();
  }

  private _findMaxValue(): void {
    if(this.n === 0) { return;}
  
    this.maxVal = this.nums[0];
    for(let i=1; i<this.n; i++) {
      if(this.nums[i] > this.maxVal) {
        this.maxVal = this.nums[i];
      }
    }
  }

   public countValidSubarrays(): number {
        if (this.n === 0 || this.maxVal === -Infinity) {
            return 0;
        }

        let left = 0;
        let countMaxInWindow = 0; 
        let totalValidSubarrays = 0;

        for (let right = 0; right < this.n; right++) {
            if (this.nums[right] === this.maxVal) {
                countMaxInWindow++;
            }

            while (countMaxInWindow >= this.k) {
                totalValidSubarrays += (this.n - right);

                if (this.nums[left] === this.maxVal) {
                    countMaxInWindow--; 
                }
                left++; 
            }
        }

        return totalValidSubarrays;
    }


}

function countSubarrays(nums: number[], k: number): number {
  if(!nums || nums.length === 0) {
    return 0;
  }

  if(k <=0) {console.warn('Constraints voilation: k must be positive;')}

  try {
    const counter = new MaxElementSubarrayCounter(nums, k);

    return counter.countValidSubarrays();
  } catch (error: any) {
   console.error(`Error during subarrya counting: `, error.message) ;

   return 0;
  }
};

const nums1 = [1, 3, 2, 3, 3]
const k1 = 2;
console.log(`Example 1: ${countSubarrays(nums1, k1  )}`)

const nums2 = [1, 4, 2, 1];
const k2 = 3;
console.log(`Example 2: ${countSubarrays(nums2, k2)}`);

const nums3 = [3, 3, 3, 3];
const k3 = 2;
console.log(`Example 3: ${countSubarrays(nums3, k3)}`);

const nums4 = [6,6,6];
const k4 = 1;
console.log(`Example 4: ${countSubarrays(nums4, k4)}`);