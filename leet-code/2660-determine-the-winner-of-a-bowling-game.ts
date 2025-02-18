// Link: https://leetcode.com/problems/determine-the-winner-of-a-bowling-game/

import asserts from "./utils/asserts.ts";

const PERFECT_SCORE = 10;
function calculateSum(player: number[]): number {
  let sum = 0;

  for (let i = 0; i < player.length; i++) {
    const first = i - 1;
    const second = i - 2;

    if (player[first] === PERFECT_SCORE || player[second] === PERFECT_SCORE) {
      sum = sum + 2 * player[i];
    } else {
      sum = sum + player[i];
    }
  }

  return sum;
}

function isWinner(player1: number[], player2: number[]): number {
  let player1Sum = 0;
  let player2Sum = 0;

  player1Sum = calculateSum(player1);
  player2Sum = calculateSum(player2);

  if (player1Sum > player2Sum) return 1;
  if (player1Sum < player2Sum) return 2;
  if (player1Sum === player2Sum) return 0;

  return 0;
}

// Tests

const input = [
  [
    [5, 10, 3, 2],
    [6, 5, 7, 3],
  ],
  [
    [3, 5, 7, 6],
    [8, 10, 10, 2],
  ],
  [
    [2, 3],
    [4, 1],
  ],
  [
    [1, 1, 1, 10, 10, 10, 10],
    [10, 10, 10, 10, 1, 1, 1],
  ],
];

const output = [1, 2, 0, 2];

asserts(input, true, isWinner, output);
