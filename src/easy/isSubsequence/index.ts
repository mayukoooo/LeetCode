// https://leetcode.com/problems/is-subsequence/description/
type IsSubsequence = (s: string, t: string) => boolean;
const isSubsequence: IsSubsequence = (s, t) => {
  let counter = 0;

  for (let i = 0; i < t.length; i++) {
    if (s[counter] === t[i]) counter++;
  }
  return counter === s.length;
};

console.log(isSubsequence("abc", "ahbgdc")); // true
console.log(isSubsequence("axc", "ahbgdc")); // false
console.log(isSubsequence("b", "c")); // false
console.log(isSubsequence("aaaaaa", "bbaaaa")); // false
