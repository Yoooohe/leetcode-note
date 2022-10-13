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
var diameterOfBinaryTree = function (root) {
  let res = 0;
  const maxDepth = (node) => {
    if (!node) return 0;
    const left = maxDepth(node.left);
    const right = maxDepth(node.right);
    res = Math.max(left + right, res);
    return Math.max(left, right) + 1;
  };
  maxDepth(root);
  return res;
};
