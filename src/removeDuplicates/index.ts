type RemoveDuplicates = (array: number[]) => number[];

const removeDuplicates: RemoveDuplicates = (array) => {
  return [...new Set(array)];
};

console.log(removeDuplicates([1, 1, 2])); // [1,2]
