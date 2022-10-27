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
 * @return {boolean}
 */
var isValidBST = function (root) {
  const isValid = (curNode, maxNode, minNode) => {
    if (!curNode) return true;
    if (maxNode && curNode.val >= maxNode.val) return false;
    if (minNode && curNode.val <= minNode.val) return false;
    const isLeftValid = isValid(curNode.left, curNode, minNode);
    const isRightValid = isValid(curNode.right, maxNode, curNode);
    return isLeftValid && isRightValid;
  };
  return isValid(root, null, null);
};

// 笔记：我们通过使用辅助函数，增加函数参数列表，在参数中携带额外信息，将这种约束传递给子树的所有节点，这也是二叉树算法的一个小技巧。
// 根据 BST 的定义，root 的整个左子树都要小于 root.val，整个右子树都要大于 root.val。

// 最后总结一下吧，通过这篇文章，我们总结出了如下几个技巧：
// 1、如果当前节点会对下面的子节点有整体影响，可以通过辅助函数增长参数列表，借助参数传递信息。
// 2、在二叉树递归框架之上，扩展出一套 BST 代码框架：
// void BST(TreeNode root, int target) {
//   if (root.val == target)
//       // 找到目标，做点什么
//   if (root.val < target)
//       BST(root.right, target);
//   if (root.val > target)
//       BST(root.left, target);
// }
// 3、根据代码框架掌握了 BST 的增删查改操作。
