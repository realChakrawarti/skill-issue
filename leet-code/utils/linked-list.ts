/**
 * Definition for singly-linked list.
 */
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function arrayToLinkedList(arr: number[]): ListNode | null {
  if (!arr || arr.length === 0) {
    return null;
  }

  const head = new ListNode(arr[0]);
  let tail = head;

  for (let i = 1; i < arr.length; i++) {
    tail.next = new ListNode(arr[i]);
    tail = tail.next;
  }

  return head;
}
