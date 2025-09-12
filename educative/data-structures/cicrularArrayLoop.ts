function nextStep(idx: number, value: number, size: number) {
  let temp = (idx + value) % size;
  if (temp < 0) temp += size;

  return temp;
}
/*Cycle is not presetn */
function cycleNotPresent(nums: number[], move: boolean, pointer: number) {
  let forward = nums[pointer] >= 0;
  if (move !== forward || Math.abs(nums[pointer] % nums.length) === 0) {
    return true;
  }
  else {
    return false
  }
}

function circularArrayLoop(nums: number[]): boolean {
  const size = nums.length;
  for (let i = 0; i < size; i++) {
    let slow = i;
    let fast = i;

    let forward = nums[i] > 0;

    while (true) {
      slow = nextStep(slow, nums[slow], size)
      if (cycleNotPresent(nums, forward, fast)) {
        break
      }

      fast = nextStep(fast, nums[fast], size)
      if (cycleNotPresent(nums, forward, fast)) {
        break
      }

      fast = nextStep(fast, nums[fast], size)
      if (cycleNotPresent(nums, forward, fast)) {
        break
      }

      if (slow === fast) return true;
    }

  }

  return false;
};
