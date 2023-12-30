type LongestCommonPrefix = (input: string[]) => string;

const longestCommonPrefix: LongestCommonPrefix = (input) => {
  let prefix = input[0];
  for (let i = 1; i < input.length; i++) {
    while (!input[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1);
    }
    if (prefix === "") return prefix;
  }
  return prefix;
};
