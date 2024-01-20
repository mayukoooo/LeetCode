// 0で前後が1でなければおく
// 1の時は飛ばす
// おけた花を管理する変数をおいておいて、変数 = nだったら関数終了
type CanPlaceFlowers = (flowerbed: number[], n: number) => boolean;
const canPlaceFlowers: CanPlaceFlowers = (flowerbed, n) => {
  let x = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 1) continue;
    if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
      x++;
    }
    if (x === n) return true;
  }
  return false;
};
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1)); // true
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2)); // false
console.log(canPlaceFlowers([1, 1, 1, 1, 1], 1)); // false
console.log(canPlaceFlowers([0, 0, 0, 0, 0], 3)); // true
