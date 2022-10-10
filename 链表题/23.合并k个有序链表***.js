// https://leetcode.cn/problems/merge-k-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

// 暴力解法：N为节点总个数，k为链表数
// 思路就是把lists里面的val都拿出来重新排序，然后使用这些val创建新的ListNode
// 空间复杂度：这个解法的由于生成了一个全新的链表，导致占用内存很高，占用内存为O(N)
// 时间复杂度：由于取val和生成链表都是O(N)而sort排序是O(NlogN)，所以最终的时间复杂度为O(NlogN)
var mergeKLists_1 = function (lists) {
  const extractValue = (list) => {
    let vals = [];
    while (list) {
      vals.push(list.val);
      list = list.next;
    }
    return vals;
  };
  let valList = [];
  lists.forEach((list) => {
    valList.push(...extractValue(list));
  });
  valList.sort((a, b) => a - b);
  let dummy = new ListNode();
  let p = dummy;
  valList.forEach((val) => {
    const curNode = new ListNode(val);
    p.next = curNode;
    p = p.next;
  });
  return dummy.next;
};

// 分治: 自上而下递归
// 时间复杂度为Nlogk
var mergeKLists_2 = function (lists) {
  const mergeTwoList = (head1, head2) => {
    let dummy = new ListNode();
    let cur = dummy;
    while (head1 && head2) {
      if (head1.val < head2.val) {
        cur.next = head1;
        head1 = head1.next;
      } else {
        cur.next = head2;
        head2 = head2.next;
      }
      cur = cur.next;
    }
    cur.next = head1 ? head1 : head2 ? head2 : null;
    return dummy.next;
  };

  const mergeLists = (lists, start, end) => {
    if (!lists.length) return null;
    if (start === end) return lists[start];
    const mid = Math.floor((start + end) / 2);
    const head1 = mergeLists(lists, start, mid);
    const head2 = mergeLists(lists, mid + 1, end);
    return mergeTwoList(head1, head2);
  };
  return mergeLists(lists, 0, lists.length - 1);
};

// 分治：自下而上
var mergeKLists_3 = function (lists) {
  const mergeTwoList = (head1, head2) => {
    let dummy = new ListNode();
    let cur = dummy;
    while (head1 && head2) {
      if (head1.val < head2.val) {
        cur.next = head1;
        head1 = head1.next;
      } else {
        cur.next = head2;
        head2 = head2.next;
      }
      cur = cur.next;
    }
    cur.next = head1 ? head1 : head2 ? head2 : null;
    return dummy.next;
  };
  let jump = 1;
  while (jump < lists.length) {
    for (let i = 0; i < lists.length; i += 2 * jump) {
      lists[i] = mergeTwoList(lists[i], lists[i + jump]);
    }
    jump *= 2;
  }
  return lists[0] ? lists[0] : null;
};
