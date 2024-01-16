// https://leetcode.com/problems/valid-palindrome/submissions/1147496239/
// 文字列に対して比較演算子（>=、<=など）を使用することができる
// ∟ 文字列が内部的にUnicode（文字を表す数値）に変換され、その数値が比較されるため
// ∟ "a" >= "b"という比較は、"a"のUnicodeは97、"b"のUnicodeは98なので、この比較はfalseとなる
type IsPalindrome125 = (input: string) => boolean;

const isPalindrome125: IsPalindrome125 = (input) => {
  if (input.trim() === "") return true;

  let str = "";
  const lowerStr = input.toLowerCase();

  // 英数字の場合は文字列を連結する
  for (let i = 0; i <= lowerStr.length - 1; i++) {
    if (
      ("a" <= lowerStr[i] && lowerStr[i] <= "z") ||
      ("0" <= lowerStr[i] && lowerStr[i] <= "9")
    ) {
      str += lowerStr[i];
    }
  }

  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    } else {
      left++;
      right--;
    }
  }
  return true;
};
console.log(isPalindrome125("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome125("race a car")); // false
console.log(isPalindrome125(" ")); // true
