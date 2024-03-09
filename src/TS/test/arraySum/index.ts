type ArraySum = (numbers: number[]) => number;
const arraySum: ArraySum = (numbers) => {
  const initialValue = 0;
  return numbers.reduce(
    (acc, currentValue) => acc + currentValue,
    initialValue
  );
};
console.log(arraySum([1, 2, 3, 4, 5]));
console.log(arraySum([5]));
