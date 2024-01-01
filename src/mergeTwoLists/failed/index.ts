type MergeTwoLists = (
  list1: number[] | null,
  list2: number[] | null
) => number[] | null;

const sortArray = (array: number[]) => {
  return array.sort((a, b) => a - b);
};

const mergeTwoLists: MergeTwoLists = (list1, list2) => {
    console.log(list1)
  if (list1 === null && !!list2) {
    return sortArray(list2);
  }
  if (!!list1 && list2 === null) {
    return sortArray(list1);
  }
  if (!!list1 && !!list2) {
    console.log(...list1)
    return sortArray([...list1, ...list2]);
  }
  return [];
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
console.log(mergeTwoLists([], []));
console.log(mergeTwoLists([], [0]));
