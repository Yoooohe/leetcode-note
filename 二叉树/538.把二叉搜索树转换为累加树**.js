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
var convertBST = function (root) {
  let sum = 0;
  const traverse = (curNode) => {
    if (!curNode) return null;
    traverse(curNode.right);
    sum += curNode.val;
    curNode.val = sum;
    traverse(curNode.left);
  };
  traverse(root);
  return root;
};

// 总结：二叉搜索树通常都要在中序位置做操作
