// Link: https://leetcode.com/problems/middle-of-the-linked-list/

import asserts from "./utils/asserts.ts";
import { arrayToLinkedList, ListNode } from "./utils/linked-list.ts";

function middleNode(head: ListNode | null): ListNode | null {
  let count = 0;
  let tail = head;

  let middle = head;

  while (tail?.next) {
    count++;
    tail = tail.next;
  }

  let i = 0;
  while (i < count / 2) {
    middle = middle?.next ?? null;
    i++;
  }

  return middle;
}

// Tests

const input = [
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5, 6],
];
const output = [
  [3, 4, 5],
  [4, 5, 6],
];

const actualInput = input.map((item) => arrayToLinkedList(item));
const actualOutput = output.map((item) => arrayToLinkedList(item));

asserts(actualInput, middleNode, actualOutput);

// middleNode(actualInput[0]);
