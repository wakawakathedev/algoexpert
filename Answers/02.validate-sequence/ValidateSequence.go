package main

func IsValidSubsequence(array []int, sequence []int) bool {
	// Write your code here.
	seqIndex := 0

	for _, value := range array {
		if (seqIndex == len(sequence)) {
			break
		}
		if sequence[index] === value {
			seqIndex += 1
		}
	}

	return seqIndex == len(sequence)
}
