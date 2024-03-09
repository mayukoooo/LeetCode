type FourthBit = (number: number) => number;
const fourthBit: FourthBit = (number) => {
  const binaryNumber = number.toString(2);
  const last = Array.from(binaryNumber).pop();
  return Number(last);
};
console.log(fourthBit(77));
console.log(fourthBit(32));
console.log(fourthBit(0));
