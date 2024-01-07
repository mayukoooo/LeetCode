type RemoveElement = (numArray: number[], value: number) => number;
const removeElement: RemoveElement = (numArray, value) => {
  const NumArrayExcludedValue = numArray.filter((num) => num !== value);
  return NumArrayExcludedValue.length;
};
console.log(removeElement([3, 2, 2, 3], 3)); //2
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); //5
