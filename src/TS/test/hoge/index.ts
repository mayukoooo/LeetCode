export const getAnswerArray = (array: number[][]) => {
    let newArray: number[] = [];
    const n = array.length;
  
    for (let index = 0; index < Math.ceil(n / 2); index++) {
      // 1-5,17-19,25
      for (let a = index; a < n - index; a++) {
        newArray.push(array[a][index]);
      }
  
      // 6-9,20-21
      for (let b = index + 1; b < n - index; b++) {
        newArray.push(array[n - 1 - index][b]);
      }
  
      // 10-13,22-23
      for (let c = n - 2 - index; c >= index; c--) {
        newArray.push(array[c][n - 1 - index]);
      }
  
      // 14-16,24
      for (let d = n - 2 - index; d > index; d--) {
        newArray.push(array[index][d]);
      }
    }
  
    return newArray;
  };
console.log(getAnswerArray([
    [1, 2],
    [3, 4],
  ]))
