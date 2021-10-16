/**
 *O(n)
 */
// function sortedSquares(array: number[]) {
//   return array.map(i => Math.pow(i, 2)).sort((a, b) => a < b ? -1 : 1)
// }

function sortedSquares(array: number[]) {
  const values = []
  let lastValue = 0;

  for (let entry of array) {
    const value = Math.pow(entry, 2)
    console.log(values, value)
    if (value >= lastValue) {
      values.push(value)
    } else {
      values.unshift(value)
    }
    lastValue = value
  }

  return values
}

// sortedSquares([1, 2, 3, 5, 6, 8, 9]) //? [1, 4, 9, 25, 36, 64, 81]
// sortedSquares([-10, 0, 10]) //?

sortedSquares([-10, -5, 0, 5, 10]) //?
// [-50, -13, -2, -1, 0, 0, 1, 1, 2, 3, 19, 20]
// [0, 0, 1, 1, 1, 4, 4, 9, 169, 361, 400, 2500]

// [-10, -5, 0, 5, 10]
// [0, 25, 25, 100, 100]


