// Link: https://leetcode.com/problems/maximum-ascending-subarray-sum

import asserts from "./utils/asserts.ts";

function maxAscendingSum(nums: number[]): number {
  let maxSum = nums[0];
  let currentSum = 0;
  for (let i = 1; i <= nums.length; i++) {
    if (nums[i - 1] < nums[i]) {
      currentSum += nums[i - 1];
    } else {
      if (currentSum) {
        currentSum += nums[i - 1];
        if (currentSum > maxSum) {
          maxSum = currentSum;
        }
        currentSum = 0;
      }
      continue;
    }
  }

  return maxSum;
}

// Tests

const input = [
  [10, 20, 30, 5, 10, 50],
  [10, 20, 30, 40, 50],
  [12, 17, 15, 13, 10, 11, 12],
  [100, 10, 1],
  [9, 1, 3, 4],
];
const output = [65, 150, 33, 100, 9];

asserts(input, false, maxAscendingSum, output);
