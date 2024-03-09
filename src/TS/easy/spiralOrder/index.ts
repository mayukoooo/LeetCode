type SpiralOrder = (matrix: number[][]) => number[];

const spiralOrder: SpiralOrder = (matrix) => {
  let result: number[] = [];
  while (matrix.length) {
    //　左辺取得
    for (let i = 0; i < matrix.length; i++) {
      let shifted = matrix[i].shift();
      if (shifted !== undefined) {
        result.push(shifted);
      }
    }

    // 下辺を取得
    let bottomRow = matrix.pop();
    if (bottomRow !== undefined) {
      result = result.concat(bottomRow);
    }

    // 右辺取得
    for (let i = matrix.length - 1; i >= 0; i--) {
      let shifted = matrix[i].pop();
      if (shifted !== undefined) {
        result.push(shifted);
      }
    }
  }
  return result;
};

console.log(
  spiralOrder([
    [1, 2],
    [3, 4],
  ])
); // [1, 3, 4, 2]
console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); // [1, 4, 7, 8, 9, 6, 3, 2, 5]
