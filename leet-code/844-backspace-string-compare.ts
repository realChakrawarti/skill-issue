// Link: https://leetcode.com/problems/backspace-string-compare

import asserts from "./utils/asserts.ts";

function updatedString(input: string) {
  const BACKSPACE_CHAR = "#";
  const list: string[] = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] === BACKSPACE_CHAR) {
      list.pop();
    } else {
      list.push(input[i]);
    }
  }

  return list.join("");
}

function backspaceCompare(s: string, t: string): boolean {
  return updatedString(s) === updatedString(t);
}

// Tests

const input = [
  ["ab#c", "ad#c"],
  ["ab##", "c#d#"],
  ["a#c", "b"],
];

const output = [true, true, false];

asserts(input, true, backspaceCompare, output);
