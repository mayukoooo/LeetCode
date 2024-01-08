type JumpGameII = (numArray: number[]) => number;

const jumpGameII: JumpGameII = (numArray) => {
  const jump = new Array(numArray.length).fill(Infinity);
  jump[0] = 0;

  for (let i = 1; i < numArray.length; i++) {
    for (let j = 0; j < i; j++) {
      if (numArray[j] >= i - j) {
        jump[i] = Math.min(jump[i], jump[j] + 1);
      }
    }
  }
  return jump[numArray.length - 1];
};
console.log(jumpGameII([2, 3, 1, 1, 4])); // 2
console.log(jumpGameII([2, 3, 0, 1, 4])); // 2
