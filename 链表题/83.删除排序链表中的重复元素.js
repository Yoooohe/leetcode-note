/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let dummy = new ListNode();
  dummy.next = head;
  let fast = head;
  let slow = head;
  if (!head) return null;
  while (fast) {
    if (fast.val !== slow.val) {
      const temp = slow.next;
      if (temp !== fast) {
        slow.next = fast;
        temp.next = null;
      }
      slow = slow.next;
    }
    fast = fast.next;
  }
  slow.next = null;
  return dummy.next;
};

// 需要注意：需要把slow后面的节点断开。它与26题双指针数组非常相似
