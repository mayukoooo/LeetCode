// https://leetcode.com/problems/isomorphic-strings/submissions/1199505965/
package main

import "fmt"

func isIsomorphic(s string, t string) bool {
	// map: キーと値のペアを保持するデータ構造
	// Goのmapを初期化する構文
	// map[キーの型]値の型{ キー1: 値1, キー2: 値2, ... }
	sPattern, tPattern := map[uint8]int{}, map[uint8]int{}
	// indexは、文字列sの各文字のインデックスを表す
	for index := range s {
		// sとtの現在の文字が同じインデックスで初めて出現したかどうかを確認する
		if sPattern[s[index]] != tPattern[t[index]] {
			return false
		} else {
			// sとtの現在の文字が同じインデックスで初めて出現した場合、それぞれの文字をそのインデックスに関連付ける
			sPattern[s[index]] = index + 1
			tPattern[t[index]] = index + 1
		}
	}
	return true
}

func main() {
	fmt.Println(isIsomorphic("egg", "add"))     // true
	fmt.Println(isIsomorphic("foo", "bar"))     // false
	fmt.Println(isIsomorphic("paper", "title")) // true
}
