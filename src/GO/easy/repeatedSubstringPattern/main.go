package main

import "strings"

func repeatedSubstringPattern(s string) bool {
	n := len(s)
	// 繰り返しの部分文字列が全体の半分以上になることはないので、n/2までループ
	for i := 1; i <= n/2; i++ {
		// nがiで割り切れるかどうかを確認 => 繰り返しの部分文字列が全体を均等に分割できる必要があるため
		// nがiで割り切れる場合、sをi文字で割った部分文字列を作成
		if n%i == 0 {
			// 作成した部分文字列をn/i回繰り返し、sと比較
			substring := s[:i]
			// strings.Builder: 文字列を効率的に連結するための構造体
			var builder strings.Builder
			for j := 0; j < n/i; j++ {
				// WriteString: 文字列をbuilderに追加
				builder.WriteString(substring)
			}
			// 作成した新しい文字列が元の文字列sと一致するかどうかを確認
			// 一致する場合、sは繰り返しの部分文字列で構成されていると判断
			if builder.String() == s {
				return true
			}
		}
	}
	return false
}

func main() {
	repeatedSubstringPattern("abab") // true
}
