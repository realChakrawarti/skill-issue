// Link: https://leetcode.com/problems/type-of-triangle

import asserts from "./utils/asserts.ts";

function triangleType(nums: number[]): string {
  // Check if 2 sides are greater than the third
  const case_one = nums[0] + nums[1] > nums[2];
  const case_two = nums[0] + nums[2] > nums[1];
  const case_three = nums[1] + nums[2] > nums[0];

  if (!(case_one && case_two && case_three)) {
    return "none";
  }

  if (nums[0] === nums[1] && nums[0] === nums[2]) {
    return "equilateral";
  }

  if (nums[0] !== nums[1] && nums[0] !== nums[2] && nums[1] !== nums[2]) {
    return "scalene";
  }

  return "isosceles";
}

// Tests

const input = [
  [3, 3, 3],
  [3, 4, 5],
  [9, 4, 9],
];
const output = ["equilateral", "scalene", "isosceles"];

asserts(input, false, triangleType, output);
