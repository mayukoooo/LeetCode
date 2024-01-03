type PlusOne = (digits: number[]) => number[];

const plusOne: PlusOne = (digits) => {
  const lastNumber = digits.pop();
  if (lastNumber === undefined) return digits;
  
  const added1ToLastNumber = String(lastNumber + 1)
    .split("")
    .map(Number);
  return [...digits, ...added1ToLastNumber];
};
console.log(plusOne([1, 2, 3])); // [1,2,4]
console.log(plusOne([4, 3, 2, 1])); // [4,3,2,2]
console.log(plusOne([9])); // [1,0]
