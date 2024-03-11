package main

import (
	"fmt"
	"sort"
	"strings"
)

// ソートには計算コストがかかるので、この解法は遅い
func isAnagram(s string, t string) bool {
	// 文字列を文字のスライスに変換（文字列をループし、各文字をスライスに追加する）
	// 例）、"anagram"をスライスする = "anagram" => ["a", "n", "a", "g", "r", "a", "m"]
	slicedS := strings.Split(s, "")
	slicedT := strings.Split(t, "")
	// アルファベット順に並び替え
	sort.Strings(slicedS)
	sort.Strings(slicedT)
	// ソートされた文字のスライスを再度文字列に結合
	joinedS := strings.Join(slicedS, "")
	joinedT := strings.Join(slicedT, "")

	return joinedS == joinedT
}

func main() {
	fmt.Println(isAnagram("anagram", "nagaram")) // true
	fmt.Println(isAnagram("rat", "car"))         // false
}
