type IsPalindrome = (x: number) => boolean;

const isPalindrome: IsPalindrome = (x) => {
  if (x < 0) return false;

  const xToString = String(x);
  for (let i = 0; i < xToString.length; i++) {
    if (xToString[i] !== xToString[xToString.length - (1 + i)]) {
      return false;
    }
  }
  return true;
};
