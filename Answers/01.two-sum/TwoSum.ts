
// O(n)²
// start with two pointers
// the first pointer starts at the first element
// the second pointer is at second element
// the second pointer then traverses the array
// trying to find the difference of targetSum and firstValue
// iterate until second point reaches end of array
// then shift first index to where second index was and repeat.

function twoNumberSum(array, targetSum) {
  // Write your code here.
  let firstIndex = 0
  let secondIndex = 1

  let firstValue = array[0]
  let secondValue = array[1]

  let remainder = targetSum - firstValue
}


/**
 * stored values = {
 *   array[value]: remainder
 * }
 */

function twoNumberSumMap(array, targetSum) {
  let value;
  let storedValues = {}

  // iterate through array
  for (let i = 0; i < array.length; i++) {
    value = array[i];

    if (!!storedValues[value]) {
      return [value, storedValues[value]]
    }
    storedValues[targetSum - value] = value;
  }

  return []
}

const testCase1 = { "array": [3, 5, -4, 8, 11, 1, -1, 6], "targetSum": 10 }
const testCase2 = { "array": [4, 6], "targetSum": 10 }
const testCase3 = { "array": [4, 6, 1], "targetSum": 5 }
const testCase4 = { "array": [4, 6, 1, -3], "targetSum": 3 }
const testCase5 = { "array": [1, 2, 3, 4, 5, 6, 7, 8, 9], "targetSum": 17 }
const testCase6 = { "array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 15], "targetSum": 18 }
const testCase7 = { "array": [-7, -5, -3, -1, 0, 1, 3, 5, 7], "targetSum": -5 }

const tests = [
  testCase1, testCase2, testCase3, testCase4, testCase5, testCase6, testCase7
];
const test = (testCase) => twoNumberSumMap(testCase.array, testCase.targetSum) //?

const testAll = tests.map(test) //?

