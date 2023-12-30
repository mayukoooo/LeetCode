// 4, 9, 40, 90, 400, 900の考慮漏れ
const romanToIntFailed: RomanToInt = (input) => {
  const inputArray = [...input] as Roman[];
  const initialValue: number = 0;
  return inputArray.reduce(
    (acc, currentValue) => acc + ROMAN_NUMERALS[currentValue],
    initialValue
  );
};
