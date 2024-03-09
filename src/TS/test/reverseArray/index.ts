type ReverseArray = (arr: number[]) => number[];
const reverseArray: ReverseArray = (arr) => {
  let result: number[] = [];
  for (let i = 1; i <= arr.length; i++) {
    result = result.concat(arr[arr.length - i]);
  }
  return result;
};
console.log(reverseArray([1, 3, 2, 4, 5])) // [5, 4, 2, 3, 1]
console.log(reverseArray([])) // [5, 4, 2, 3, 1]
