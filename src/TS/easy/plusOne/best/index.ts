// 問題文に不備あり
import { PlusOne } from "../index";

const plusOne: PlusOne = (digits) => {
  return (BigInt(digits.join("")) + BigInt(1)).toString().split("").map(Number);
};
