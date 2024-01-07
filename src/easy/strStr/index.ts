type StrStr = (haystack: string, needle: string) => number;
const strStr: StrStr = (haystack, needle) => {
  const regExp = new RegExp(needle, "g");
  const matches = haystack.match(regExp);

  if (matches === null) return -1;
  return haystack.indexOf(needle);
};
console.log(strStr("sadbutsad", "sad")); // 0
console.log(strStr("leetcode", "leeto")); // -1
