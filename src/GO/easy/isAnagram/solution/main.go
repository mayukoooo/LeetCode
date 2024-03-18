package main

import "fmt"

func isAnagram(s string, t string) bool {
	// 長さ26の整数型のスライスcharsを作成
	// このスライスは、アルファベットの出現回数を保持する
	chars := make([]int, 26)

	// 文字列sの各文字についてループ
	// 各文字について、その文字がアルファベットの何番目であるかを計算し（'a'からの距離）、対応するcharsの要素をインクリメント
	for _, v := range s {
		i := int(v - 'a')
		chars[i]++
	}

	// 文字列tの各文字についてループ
	// 各文字について、その文字がアルファベットの何番目であるかを計算し（'a'からの距離）、対応するcharsの要素をデクリメント
	for _, v := range t {
		i := int(v - 'a')
		chars[i]--
	}

	// charsの各要素についてループ
	// すべての要素が0であるかを確認
	// 0でない要素があれば、sとtはアナグラムではないためfalseを返す
	for _, v := range chars {
		if v != 0 {
			return false
		}
	}

	return true
}

func main() {
	fmt.Println(isAnagram("anagram", "nagaram")) // true
	fmt.Println(isAnagram("rat", "car"))         // false
}
