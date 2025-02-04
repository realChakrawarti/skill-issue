// Link: https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray

import asserts from "./utils/asserts.ts";

function subArray(nums: number[], type: "increasing" | "decreasing") {
  const mainArray = [];
  let _tempArray = [];
  for (let i = 0; i < nums.length - 1; i++) {
    const condition =
      type === "increasing" ? nums[i] < nums[i + 1] : nums[i] > nums[i + 1];

    if (condition) {
      // 1st iteration
      if (_tempArray.length) {
        _tempArray.pop();
      }

      _tempArray.push(nums[i]);
      _tempArray.push(nums[i + 1]);

      if (i + 1 === nums.length - 1) {
        mainArray.push(_tempArray);
      }
    } else {
      if (_tempArray.length) {
        mainArray.push(_tempArray);
        _tempArray = [];
      }
    }
  }

  let maxLength: [number, Array<number>] = [1, []];
  mainArray.forEach((item) => {
    if (item.length && item.length > maxLength[0]) {
      maxLength = [item.length, item];
    }
  });

  return maxLength;
}

function longestMonotonicSubarray(nums: number[]): number {
  if (nums.length === 1) return 1;

  const increasing = subArray(nums, "increasing");
  const decreasing = subArray(nums, "decreasing");

  if (increasing[0] >= decreasing[0]) {
    return increasing[0];
  }

  return decreasing[0];
}

// Tests

const input = [
  [1, 4, 3, 3, 2],
  [3, 3, 3, 3],
  [3, 2, 1],
];
const output = [2, 1, 3];

asserts(input, false, longestMonotonicSubarray, output);

// console.log(longestMonotonicSubarray([1, 4, 5, 3, 2, 3]));
