type Values = {
  [key: string]: number
}

export function tournamentWinner(competitions: string[][], results: number[]) {
  // Write your code here.
  const values: Values = {};
  let maxValue = 0;
  let maxTeam = "";

  for (let index in competitions) {
    const competition = competitions[index]
    const result = results[index]
    const winner = result === 1 ? competition[0] : competition[1]

    if (!values[winner]) {
      values[winner] = 0
    }

    values[winner] += 3

    if (maxValue <= values[winner]) {
      maxTeam = winner;
      maxValue = values[winner];

    }
  }

  return maxTeam
}
