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
 * @return {TreeNode}
 */
// 1. 层序遍历
var invertTree_1 = function (root) {
  if (!root) return null;
  let nodes = [root];
  while (nodes.length) {
    let p;
    while ((p = nodes.pop())) {
      const temp = p.left;
      p.left = p.right;
      p.right = temp;
      nodes.push(p.left, p.right);
    }
  }
  return root;
};

// 2. 遍历
var invertTree = function (root) {
  const traverse = (node) => {
    if (!node) return root;
    const temp = node.left;
    node.left = node.right;
    node.right = temp;
    traverse(node.left);
    traverse(node.right);
  };
  traverse(root);
  return root;
};

// 3. 分解问题
// 首先尝试给给invertTree函数一个定义
// 定义：将以 root 为根的这棵二叉树翻转，返回翻转后的二叉树的根节点
var invertTree = function (root) {
  if (!root) return null;
  // 利用函数定义，先翻转左右子树
  const left = invertTree(root.left);
  const right = invertTree(root.right);
  // 然后交换左右子节点
  root.left = right;
  root.right = left;
  // 和定义逻辑自恰：以 root 为根的这棵二叉树已经被翻转，返回 root
  return root;
};
// 注意：这种「分解问题」的思路，
// 核心在于你要给递归函数一个合适的定义，然后用函数的定义来解释你的代码；
// 如果你的逻辑成功自恰，那么说明你这个算法是正确的。
