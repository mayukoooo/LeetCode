type Roman = "I" | "V" | "X" | "L" | "C" | "D" | "M";
const ROMAN_NUMERALS: Record<Roman, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
type RomanToInt = (input: string) => number;

const romanToInt: RomanToInt = (input) => {
  const inputArray = [...input] as Roman[];
  const initialValue: number = 0;

  return inputArray.reduce(
    (acc, currentValue, index) =>
      ROMAN_NUMERALS[currentValue] < ROMAN_NUMERALS[inputArray[index + 1]]
        ? acc - ROMAN_NUMERALS[currentValue]
        : acc + ROMAN_NUMERALS[currentValue],
    initialValue
  );
};
