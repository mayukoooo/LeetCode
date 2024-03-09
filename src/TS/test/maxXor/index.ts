type MaxXor = (lo: number, hi: number, k: number) => number;
const maxXor: MaxXor = (lo, hi, k) => {
  const array = Array.from({ length: hi - lo + 1 }, (_, i) => lo + i);
  let left = 0;
  let right = array.length - 1;
  let max = -1;
  
  while (left < right) {
    const sum = array[left] + array[right];
    if (sum > k) {
      right--;
    } else {
      max = Math.max(max, sum);
      left++;
    }
  }
  return max;
};
console.log(maxXor(2, 4, 8)); // 7
console.log(maxXor(10, 80, 19)); // 19
