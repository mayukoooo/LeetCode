// 4, 9, 40, 90, 400, 900の考慮漏れ
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
    (acc, currentValue) => acc + ROMAN_NUMERALS[currentValue],
    initialValue
  );
};
