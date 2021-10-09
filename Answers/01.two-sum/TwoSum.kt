fun twoSum(array: IntArray, targetSum: Int): IntArray {
  var storedValues: HashMap<Int, Int> = HashMap<Int, Int> ()

  for (value in array) {
    if (storedValues.containsKey(value)) {
      var answer: IntArray = intArrayOf(value, targetSum-value)
      println(answer.contentToString())
      return answer
    }

    var key = targetSum - value
    storedValues.put(key, value)
  }
  return intArrayOf()
}
fun main() {
  twoSum(intArrayOf(3, 5, -4, 8, 11, 1, -1, 6), 10)
}