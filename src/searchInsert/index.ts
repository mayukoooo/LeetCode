type SearchInsert = (numArray: number[], target: number) => number;
const searchInsert: SearchInsert = (numArray, target) => {
  let left = 0,
    right = numArray.length;

  while (left <= right) {
    const middleIndex = Math.floor((left + right) / 2);
    if (numArray[middleIndex] === target) return middleIndex;
    if (numArray[middleIndex] < target) {
      left = middleIndex + 1;
    } else {
      right = middleIndex - 1;
    }
  }
  return left;
};
console.log([1, 3, 5, 6], 5); // 2
console.log([1, 3, 5, 6], 2); // 1
console.log([1, 3, 5, 6], 7); // 4
// O(logn): データ量に対して、計算量が常に半分になっていく
