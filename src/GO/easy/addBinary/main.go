// https://leetcode.com/problems/add-binary/description/
// パッケージ：Go言語におけるコードの組織化のための重要な概念
// 同じパッケージに所属している場合、違うファイルであっても関数を呼び出す際に特別な宣言は不要
package main

import (
	"fmt"
	"math/big"
)

func addBinary(a string, b string) string {
	aInt, bInt, sum := new(big.Int), new(big.Int), new(big.Int)
	// 2進数に直す
	aInt.SetString(a, 2)
	bInt.SetString(b, 2)
	// aIntとbIntの和をsumにセット
	sum.Add(aInt, bInt)
	// 引数として基数（数の進数）を取り、レシーバ（sum）の値をその基数で表現した文字列を返す
	return sum.Text(2)
}

func main() {
	fmt.Println(addBinary("11", "1")) // 100
}
