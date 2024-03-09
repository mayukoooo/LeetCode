type TwoSum = (nums: number[], target: number) => number[] | void;

const twoSum: TwoSum = (nums, target) => {
  for(let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const diff = target - num;
    const diffIndex = nums.indexOf(diff);
    if (diffIndex !== -1 && diffIndex !== i) {
      return [i, diffIndex];
    }
  }
};
