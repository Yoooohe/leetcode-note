/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let slow = head;
  let fast = head;
  // 这里的类似判断是否有环
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) break;
  }
  // 处理没有环导致跳出循环的情况
  if (!fast || !fast.next) return null;
  slow = head;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
};

// 笔记：
// 我们第一个while循环部分是和判断是否有环的逻辑一致的
// 找到环之后我们会跳出这个while循环，这个时候slow走了k步，fast走了2k步，并且相遇了。
// 假设他们的相遇点距离入环的位置m步，那么从head走到入环的位置k-m步
// 关键点来了！跳出的时候fast节点走了2k步，比slow多走了k步，所以环的长度一定为k的整数倍，
// 因为多出来的k步其实就是在环里转圈，因此多走了m步，所以再走k-m步就可以回到环起点。

// 因此慢指针从head开始，fast指针从跳出位置开始，齐头并进，相遇时即为环起点。
