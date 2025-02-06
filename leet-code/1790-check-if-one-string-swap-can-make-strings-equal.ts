// Link: https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal

import asserts from "./utils/asserts.ts";

function areAlmostEqual(s1: string, s2: string): boolean {
  if (s1 === s2) return true;

  for (let i = 0; i < s1.length; i++) {
    for (let j = i + 1; j < s1.length; j++) {
      const subs = s1.split("");
      const _temp = subs[i];
      subs[i] = subs[j];
      subs[j] = _temp;
      if (subs.join("") === s2) {
        return true;
      }
    }
  }

  return false;
}

// Tests

const input = [
  ["bank", "kanb"],
  ["attack", "defend"],
  ["kelb", "kelb"],
];

const output = [true, false, true];

asserts(input, true, areAlmostEqual, output);
