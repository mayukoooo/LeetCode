function minCostClimbingStairs(cost: number[]): number {
  cost.push(0);
  for (let i = cost.length - 3; i >= 0; i--) {
    console.log("i", i)
    console.log("cost[i]", cost[i])
      console.log("cost[i] += Math.min(cost[i + 1], cost[i + 2]);", cost[i] += Math.min(cost[i + 1], cost[i + 2]))
    cost[i] += Math.min(cost[i + 1], cost[i + 2]);
    console.log("cost", cost)
  }
  console.log("Math.min(cost[0], cost[1]);", Math.min(cost[0], cost[1]))
  return Math.min(cost[0], cost[1]);
}

console.log(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1]))
