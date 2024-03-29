// 再帰関数
// ユーグリッドの互除法によって最大公約数を求める
// 最大公約数の性質：　GCD(m, n) = GCD(n, r) ※mをnで割ったあまりをrとする
type EuclideanAlgorithm = (m: number, n: number) => number;

const euclideanAlgorithm: EuclideanAlgorithm = (m, n) => {
  // ベースケース
  if (n === 0) return m;
  return euclideanAlgorithm(n, m % n);
};

const main = (() => {
  console.log(euclideanAlgorithm(51, 15)); // 3
  console.log(euclideanAlgorithm(15, 51)); // 3
})();
