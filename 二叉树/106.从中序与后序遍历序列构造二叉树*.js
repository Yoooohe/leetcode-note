/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

var buildTree = function (inorder, postorder) {
  const valToIdx = {};
  inorder.forEach((num, idx) => {
    valToIdx[num] = idx;
  });

  const build = (inStart, inEnd, postStart, postEnd) => {
    if (inStart > inEnd) {
      return null;
    }
    // root 节点对应的值就是后序遍历数组的最后一个元素
    const rootVal = postorder[postEnd];
    // rootVal 在中序遍历数组中的索引
    const index = valToIdx[rootVal];
    // 递归构造左右子树
    const leftSize = index - inStart;
    const left = build(inStart, index - 1, postStart, postStart + leftSize - 1);
    const right = build(index + 1, inEnd, postStart + leftSize, postEnd - 1);
    return new TreeNode(rootVal, left, right);
  };

  return build(0, inorder.length - 1, 0, postorder.length - 1);
};
