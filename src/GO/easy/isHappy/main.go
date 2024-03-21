package main

import "fmt"

// 与えられた整数nの各桁の2乗の和を返す
func digitSum(n int) int {
	var digitSlice []int
	for n != 0 {
		// nを10で割った余りをdigitSliceに追加
		digitSlice = append(digitSlice, n%10)
		n /= 10
	}

	var sum int
	// 各桁の2乗の和を計算
	for _, v := range digitSlice {
		// v*v: vの2乗
		sum += v * v
	}
	return sum
}

func isHappy(n int) bool {
	x, y := n, n
	for {
		x = digitSum(x)
		y = digitSum(digitSum(y))
		if x == 1 || y == 1 {
			return true
		}
		if x == y {
			return false
		}
	}
}

func main() {
	fmt.Println(isHappy(19)) // true
}
