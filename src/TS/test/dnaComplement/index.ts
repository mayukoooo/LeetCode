type DnaComplement = (s: string) => string;
const PAIR = {
  A: "T",
  T: "A",
  G: "C",
  C: "G",
} as const;

const dnaComplement: DnaComplement = (s) => {
  const reversedArray = Array.from(s).reverse();
  let result: string[] = [];

  for (let i = 0; i <= reversedArray.length; i++) {
    let isA = reversedArray[i] === "A";
    let isT = reversedArray[i] === "T";
    let isG = reversedArray[i] === "G";
    let isC = reversedArray[i] === "C";
    if (isA) {
      result = result.concat("T");
    }
    if (isT) {
      result = result.concat("A");
    }
    if (isG) {
      result = result.concat("C");
    }
    if (isC) {
      result = result.concat("G");
    }
  }
  return result.join("");
};
console.log(dnaComplement("ATGC")) // TACG

