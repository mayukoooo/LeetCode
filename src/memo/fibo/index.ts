// フィボナッチ数列：前の数字を足した数が続く法則のこと 「1、1、2、3、5、8、13、21、34、55、89、144、233…」
// フィボナッチ数列を求める再帰関数（N番目のフィボナッチ数を計算する）
type Fibo = (N: number) => number;

const fibo: Fibo = (N) => {
  if (N === 0) return 0;
  if (N === 1) return 1;
  return fibo(N - 1) + fibo(N - 2);
};
console.log(fibo(6)); // 8
