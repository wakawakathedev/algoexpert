/**
 *
 *
 */
function isValidSubsequence(array: number[], sequence: number[]) {
  let seqIndex = 0;
  for (const value of array) {
    if (sequence[seqIndex] === value) {
      seqIndex++
    }
  }

  return seqIndex === sequence.length
}

isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]) //?