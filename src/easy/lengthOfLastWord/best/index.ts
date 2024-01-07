import { LengthOfLastWord } from "..";

const lengthOfLastWord: LengthOfLastWord = (input) => {
  const lastWard = input.trimEnd().split(" ").pop();
  return lastWard ? lastWard.length : input.length;
};
console.log(lengthOfLastWord("Hello World")); // 5
console.log(lengthOfLastWord("fly")); // 3
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // 4
console.log(lengthOfLastWord("luffy is still joyboy")); // 6
