type MySqrt<T> = (x: T) => T;

const mySqrt: MySqrt<number> = (input) => {
  return Math.trunc(Math.sqrt(input));
};
console.log(mySqrt(4)); // 2
console.log(mySqrt(8)); // 2
