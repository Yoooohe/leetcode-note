/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// 1. 暴力解法：借助外部存储，空间复杂度O(N)
var getIntersectionNode_1 = function (headA, headB) {
  const nodeMap = new Map();
  while (headA) {
    nodeMap.set(headA, 1);
    headA = headA.next;
  }
  while (headB) {
    if (nodeMap.has(headB)) return headB;
    headB = headB.next;
  }
  return null;
};

// 2. 两个链表之所以不好判断向交位置就是因为其长度不一样
// 那么，我们只要把它俩弄成一样长就好了～
// 在这种思路下，可以有下面两种解法

// 2.1 将A链表接到B链表后面，B链表接到A链表后面，这样它俩齐头并进，就能找到相交点
// a1 -> a2 -> c1 -> c2 -> c3 -> b1 -> b2 -> b3 -> c1
// b1 -> b2 -> b3 -> c1 -> c2 -> c3 -> a1 -> a2 -> c1

var getIntersectionNode_2 = function (headA, headB) {
  let a = headA;
  let b = headB;
  while (a !== b) {
    a = a ? a.next : headB;
    b = b ? b.next : headA;
  }
  return a;
};

// 2.2 遍历找到AB链表的长度，长度长的先走两步，然后再齐头并进
var getIntersectionNode_3 = function (headA, headB) {
  let a = headA;
  let b = headB;
  let aLen = 0;
  let bLen = 0;
  while (a) {
    a = a.next;
    aLen += 1;
  }
  while (b) {
    b = b.next;
    bLen += 1;
  }
  a = headA;
  b = headB;
  if (aLen > bLen) {
    for (let i = 0; i < aLen - bLen; i++) {
      a = a.next;
    }
  } else {
    for (let i = 0; i < bLen - aLen; i++) {
      b = b.next;
    }
  }
  while (a !== b) {
    a = a.next;
    b = b.next;
  }
  return a;
};

// 3. 第三种解法：通过讲最后一个节点连上其中一个起点，自己造一个环，然后找到入环点。
// 注意：这种方法改变了链表结构，需要改回来～
var getIntersectionNode_4 = function (headA, headB) {
  let a = headA;
  while (a.next) {
    a = a.next;
  }
  a.next = headA;
  let slow = headB;
  let fast = headB;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) break;
  }
  if (!fast || !fast.next) {
    a.next = null;
    return null;
  }
  slow = headB;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }
  a.next = null;
  return slow;
};
