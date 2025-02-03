// Link: https://leetcode.com/problems/special-array-i

import asserts from "./utils/asserts.ts";

function isOdd(num: number) {
  return num % 2;
}

function isArraySpecial(nums: number[]): boolean {
  if (nums.length === 1) return true;

  for (let i = 0; i < nums.length - 1; i++) {
    // Adjacent element shouldn't be odd
    if (
      (!isOdd(nums[i]) && isOdd(nums[i + 1])) ||
      (isOdd(nums[i]) && !isOdd(nums[i + 1]))
    ) {
      continue;
    } else return false;
  }

  return true;
}

// Tests

const input = [[1], [2, 1, 4], [4, 3, 1, 6]];
const output = [true, true, false];

asserts(input, false, isArraySpecial, output);
