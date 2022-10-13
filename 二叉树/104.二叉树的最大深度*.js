/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// 遍历二叉树
var maxDepth = function (root) {
  let res = 0;
  const traverse = (node, curDepth) => {
    if (!node) return;
    // 到达叶子节点的时候，比较深度大小，更新res
    if (node.left === null && node.right === null) {
      res = Math.max(res, curDepth);
    }
    traverse(node.left, curDepth + 1);
    traverse(node.right, curDepth + 1);
  };
  traverse(root, 1);
  return res;
};

// 问题分解
var maxDepth = function (root) {
  if (!root) return 0;
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);
  return Math.max(leftDepth, rightDepth) + 1;
};
