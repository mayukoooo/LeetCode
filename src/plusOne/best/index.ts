import { PlusOne } from "..";

const plusOne: PlusOne = (digits) => {
  return (BigInt(digits.join("")) + BigInt(1)).toString().split("").map(Number);
};
