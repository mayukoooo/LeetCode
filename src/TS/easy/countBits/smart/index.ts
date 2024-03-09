function smartCountBits(num: number): number[] {
  const res = new Uint8Array(num + 1); // num + 1の長さを持つ0の配列
//   console.log(res)
  // i >> 1：ビットシフト演算子を使ってiを右に1ビットシフトする。これはiを2で割ることと同等。つまり、iの1つ前の数値の1の数を取得している。
  // 右に1ビットシフトする = 末尾を1消して先頭に0を1追加すること
  // ４（10進数） = 100（2進数）
  // 100 >> 1 -> 010
  // 
  // i & 1: ビット演算子を使ってiと1のビット単位でのAND演算を行う。これはiが奇数なら1、偶数なら0を返す。つまり、iが奇数（2進数表現の最後のビットが1）の場合、1の数に1を加える。
  // AND演算は、両方のビットが1の場合にのみ1を返す。

  for (let i = 0; i < res.length; i++) {
    console.log("i", i)
    console.log("i >> 1", i >> 1)
    console.log("i & 1", i & 1)
    res[i] = res[i >> 1] + (i & 1);
    console.log("res", res)
  }
  return [...res];
}
console.log(smartCountBits(2)) // [0,1,1]
// console.log(smartCountBits(5)) // [0,1,1,2,1,2]
