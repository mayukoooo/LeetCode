type LengthOfLastWord = (input: string) => number;

const lengthOfLastWord: LengthOfLastWord = (input) => {
  const trimmedInput = input.trim();
  const emptyIndex = trimmedInput.lastIndexOf(" ");
  
  if (emptyIndex === -1) return trimmedInput.length;

  const lastString = trimmedInput.slice(emptyIndex + 1, trimmedInput.length);
  return lastString.length;
};
console.log(lengthOfLastWord("Hello World")); // 5
console.log(lengthOfLastWord("fly")); // 3
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // 4
console.log(lengthOfLastWord("luffy is still joyboy")); // 6
