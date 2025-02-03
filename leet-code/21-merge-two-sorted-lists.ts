// Link: https://leetcode.com/problems/merge-two-sorted-lists

import asserts from "./utils/asserts.ts";
import { arrayToLinkedList, ListNode } from "./utils/linked-list.ts";

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  // if one is empty return the other
  if (!list1) return list2;
  if (!list2) return list1;

  // hold the merged list here
  const head = new ListNode();
  // points to head at the start since the very first node is 0 and null
  let tail = head;

  // until one is exhausted and other remains, returning false
  while (list1 && list2) {
    // compare the value
    if (list1.val < list2.val) {
      // since 1st node is empty, add the list1 node to merged list
      tail.next = list1;
      // move the list1 to next node
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    // increment the merged list for next iteration
    tail = tail.next;
  }

  // when either list is exhausted, set the remaining nodes to merged list
  tail.next = list1 ?? list2;

  return head.next;
}

const input = [
  [
    [1, 2, 4],
    [1, 3, 4],
  ],
  [[], [0]],
];

const actualInput: (ListNode | null)[][] = [];

input.forEach(([list1, list2]) => {
  const item = [];
  item.push(arrayToLinkedList(list1));
  item.push(arrayToLinkedList(list2));

  actualInput.push(item);
});

const output = [[1, 1, 2, 3, 4, 4], [0]];

const actualOutput: (ListNode | null)[] = [];

output.forEach((item) => {
  actualOutput.push(arrayToLinkedList(item));
});

asserts(actualInput, true, mergeTwoLists, actualOutput);
