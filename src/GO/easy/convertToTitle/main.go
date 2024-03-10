package main

import "fmt"

func convertToTitle(columnNumber int) string {
	if columnNumber == 0 {
		return ""
	}
	// Excelの列のタイトルが1から始まるため-1
	columnNumber--
	// columnNumberを26で割った余りを計算する。これにより、'A'から'Z'までのアルファベットを得る。
	// rune：整数値をrune型（Unicodeのコードポイントを表す）に変換する。
	// その結果に'A'を加えることで、対応するアルファベットの文字が得られる。
	// 例）、columnNumberが1の場合、1%26は1なので、'A' + rune(1)は'B'になる。これは、Excelの列のタイトルが1から始まり、1が'A'、2が'B'となることに対応している。
	charCode := 'A' + rune(columnNumber%26)
	// columnNumberを26で割った商を再帰的にこの関数に渡す。これにより、'AA'、'AB'などの列のタイトルを得ることができる。
	// 最後に、得られたアルファベットの文字列を返す。
	return convertToTitle(columnNumber/26) + string(charCode)
}

func main() {
	fmt.Println(convertToTitle(2))   // "A"
	fmt.Println(convertToTitle(28))  // "AB"
	fmt.Println(convertToTitle(701)) // "ZY"
}
