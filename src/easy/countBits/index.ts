// 0 ~ nまでの配列を作る
// ループ内で2進数に直し、1の数を検索し、1×検索分の値を新しい配列に追加する
//  return 新しい配列
type CountBits = (n: number) => number[];
const countBits: CountBits = (n) => {
  let result: number[] = [];

  const array = Array.from({ length: n + 1 }, (_, i) => i);

  for (let i = 0; i < array.length; i++) {
    const binary = array[i].toString(2);
    const countOfOne = binary.split("1").length - 1;
    result.push(countOfOne);
  }
  return result;
};
