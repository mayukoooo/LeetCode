// https://leetcode.com/problems/excel-sheet-column-number/description/
package main

import "fmt"

func titleToNumber(s string) int {
	col := 0
	// range：文字列の各文字に対して反復処理を行うことができる
	for _, char := range s {
		col *= 26
		// Goは、文字列ではなく、文字（rune）同士の引き算が可能
		// 文字（rune）は、内部的には整数（Unicodeのコードポイント）として扱われる
		// したがって、char - 'A'という操作は、文字charのUnicodeのコードポイントから、文字'A'のUnicodeのコードポイントを引く操作になる
		// 例）、charが'B'の場合、'B' - 'A'は 66 - 65 なので1になる
		// col += int(char-'A') + 1は、文字charを'A'からの相対位置（0から始まる）に変換し、+1する操作
		col += int(char-'A') + 1
	}
	return col
}

func main() {
	fmt.Println(titleToNumber("A"))  // 1
	fmt.Println(titleToNumber("AB")) // 28
	fmt.Println(titleToNumber("ZY")) // 701
}
