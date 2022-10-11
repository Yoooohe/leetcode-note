/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd_1 = function (head, n) {
  let dummy = new ListNode();
  dummy.next = head;
  let slow = dummy;
  let fast = dummy;
  while (n--) {
    fast = fast.next;
  }
  while (fast && fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  let temp = slow.next;
  slow.next = temp.next;
  temp.next = null;
  return dummy.next;
};

// 上述解法有两个注意点：
// 1. 需要判断fast.next不为空，为否slow指针会多走一步
// 2. 需要设置虚拟头节点，防止出现空指针。
// 比如说链表总共有 5 个节点，题目就让你删除倒数第 5 个节点，也就是第一个节点，那按照算法逻辑，应该首先找到倒数第 6 个节点。但第一个节点前面已经没有节点了，这就会出错。

// 我们可以把这道题进行一个分解：
// 找到倒数第N+1个节点，然后删除这个节点的下一个节点
// 这样处理不需要注意我们刚刚说的第一个问题点。
var removeNthFromEnd_2 = function (head, n) {
  function findKthNode(start, k) {
    let fast = start;
    let slow = start;
    while (k--) {
      fast = fast.next;
    }
    while (fast) {
      slow = slow.next;
      fast = fast.next;
    }
    return slow;
  }
  let dummy = new ListNode();
  dummy.next = head;
  let prevNode = findKthNode(dummy, n + 1);
  let temp = prevNode.next;
  prevNode.next = temp.next;
  temp.next = null;
  return dummy.next;
};
