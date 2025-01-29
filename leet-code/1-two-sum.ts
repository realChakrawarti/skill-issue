// Link: https://leetcode.com/problems/two-sum/

function twoSum(nums: number[], target: number): number[] {
  const arrayLen = nums.length;

  for (let i = 0; i < arrayLen; i++) {
    for (let j = i + 1; j < arrayLen; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [0, 0];
}

// Tests

const input = [
  { arr: [2, 7, 11, 15], target: 9 },
  { arr: [3, 2, 4], target: 6 },
  { arr: [3, 3], target: 6 },
];

input.forEach((item) => console.log(twoSum(item.arr, item.target)));

// [0,1], [1,2], [0,1]
