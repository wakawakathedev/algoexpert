function nonConstructibleChange(coins: number[]) {
  if (!coins.length) return 1

  // Write your code here.
  const sortedCoins = coins.sort((a, b) => a - b)

  let minValue: number = 0;

  for (let coin of sortedCoins) {
    if (coin > minValue + 1) {
      return minValue + 1
    } else {
      minValue += coin
    }
  }

  return minValue + 1

}
