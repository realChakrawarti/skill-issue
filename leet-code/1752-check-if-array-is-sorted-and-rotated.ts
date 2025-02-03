// Link: https://leetcode.com/problems/check-if-array-is-sorted-and-rotated

import asserts from "./utils/asserts.ts";

function check(nums: number[]): boolean {
  // Index, value
  let breakpoint = [0, 0];
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] <= nums[i + 1]) {
      continue;
    } else {
      breakpoint = [i, nums[i]];
      break;
    }
  }

  const breakpointIdx = breakpoint[0];
  const breakpointValue = breakpoint[1];
  if (breakpointIdx || breakpointValue) {
    for (let i = 0; i < breakpointIdx; i++) {
      for (let j = breakpointIdx + 1; j < nums.length; j++) {
        if (nums[j] > nums[i]) {
          return false;
        }
      }
    }

    for (let i = breakpointIdx + 1; i < nums.length - 1; i++) {
      // i + 1 because we already know that i < breakpointValue, that's how we got the breakpoint
      if (nums[i + 1] > breakpointValue || nums[i] > nums[i + 1]) {
        return false;
      }
    }
  }

  // Already sorted
  return true;
}

// Tests

const input = [
  [3, 4, 5, 1, 2],
  [2, 1, 3, 4],
  [1, 2, 3],
  [3, 6, 10, 1, 8, 9, 9, 8, 9],
  [3, 1, 2, 2, 4],
  [2, 4, 1, 3],
];
const output = [true, false, true, false, false, false];

asserts(input, false, check, output);
