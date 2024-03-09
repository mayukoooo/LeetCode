type IsValid = (input: string) => boolean;
type ParenthesesType1 = ")" | "]" | "}";
type ParenthesesType2 = "(" | "[" | "{";

const PARENTHESES: Record<ParenthesesType1, ParenthesesType2> = {
  ")": "(",
  "]": "[",
  "}": "{",
};

const isValid: IsValid = (input) => {
  if (input.length % 2 !== 0) return false;

  const openBracketsStack: string[] = [];

  for (let i = 0; i < input.length; i++) {
    const currentValue = input[i];

    if (["(", "[", "{"].includes(currentValue)) {
      openBracketsStack.push(currentValue);
    } else if (
      openBracketsStack.pop() !==
      PARENTHESES[currentValue as keyof typeof PARENTHESES]
    ) {
      return false;
    }
  }
  return !openBracketsStack.length;
};
