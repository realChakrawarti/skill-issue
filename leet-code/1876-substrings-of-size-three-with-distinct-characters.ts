// Link: https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/

import asserts from "./utils/asserts.ts";

function countGoodSubstrings(s: string): number {
  let count = 0;
  for (let i = 1; i < s.length - 1; i++) {
    const sub = s[i - 1] + s[i] + s[i + 1];
    if (sub[0] === sub[1] || sub[1] === sub[2] || sub[2] === sub[0]) {
      continue;
    } else {
      count++;
    }
  }

  return count;
}

// Tests

const input = ["xyzzaz", "aababcabc"];

const output = [1, 4];

asserts(input, false, countGoodSubstrings, output);
