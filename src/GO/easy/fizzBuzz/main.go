package main

import (
	"fmt"
	"strconv"
)

func multipleOf(i, k int) bool {
	return i%k == 0
}

func fizzBuzz(n int) []string {
	result := make([]string, 0)

	for i := 1; i <= n; i++ {

		// multipleOf(i, k): iがkの倍数であるかどうかを確認する
		if multipleOf(i, 3) && multipleOf(i, 5) {
			result = append(result, "FizzBuzz")

		} else if multipleOf(i, 3) {
			result = append(result, "Fizz")

		} else if multipleOf(i, 5) {
			result = append(result, "Buzz")

		} else {
			// append: スライスに新たな要素を追加するために使用
			// strconv.Itoa(i): 整数を文字列に変換する
			result = append(result, strconv.Itoa(i))

		}
	}

	return result
}

func main() {
	fmt.Println(fizzBuzz(15))
}
