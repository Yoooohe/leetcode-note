/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */

const traverse = (node1, node2) => {
  if (!node1) return;
  node1.next = node2;
  traverse(node1.left, node1.right);
  traverse(node1.right, node2.left);
  traverse(node2.left, node2.right);
};
var connect = function (root) {
  if (!root) return null;
  traverse(root.left, root.right);
  return root;
};

// 这道题的关键点主要就是把两个节点抽象到一起
// 将原本的二叉树模型转成三叉树，这样才能把非同一个父节点的同层节点连在一起。
