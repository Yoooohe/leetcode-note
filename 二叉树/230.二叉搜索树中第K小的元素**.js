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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let res = 0;
  let rank = 0;
  const traverse = (node) => {
    if (!node) return;
    traverse(node.left);
    rank++;
    if (rank === k) {
      res = node.val;
      return;
    }
    traverse(node.right);
  };
  traverse(root, k);
  return res;
};

// 进阶：如果二叉搜索树经常被修改（插入/删除操作）并且你需要频繁地查找第 k 小的值，你将如何优化算法？
// 可以通过在二叉树节点维护额外信息，每个节点记录以自己为根的这棵树有多少个节点size。
// 有了这个size，外加BST左小右大的性质，对于每个节点node就可以通过node.left推倒出node的排名。
