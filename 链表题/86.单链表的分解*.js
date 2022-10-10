//  https://leetcode.cn/problems/partition-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let dummy1 = new ListNode();
  let dummy2 = new ListNode();
  let p1 = dummy1;
  let p2 = dummy2;
  let p = head;
  while (p) {
    if (p.val < x) {
      p1.next = p;
      p1 = p1.next;
    } else {
      p2.next = p;
      p2 = p2.next;
    }
    // 断开原链表中的每个节点的 next 指针
    let temp = p.next;
    p.next = null;
    p = temp;
  }
  p1.next = dummy2.next;
  return dummy1.next;
};

// 笔记：这道题需要注意的地方：
// 由于我们是在原有的链表上进行的修改，所以需要断开原链表中的每个节点的next指针
