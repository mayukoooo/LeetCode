// https://leetcode.com/problems/climbing-stairs/description/
// Your runtime beats 57.76 % of typescript submissions
// Your memory usage beats 21.49 % of typescript submissions (43.2 MB)
// algorithm: 動的計画法（dynamic programming）

type ClimbStairs = (input: number) => number;

const climbStairs: ClimbStairs = (input) => {
  const dp = new Array(input + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= input; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[input];
};
console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3
console.log(climbStairs(4)); // 5
console.log(climbStairs(5)); // 8
