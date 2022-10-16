/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function (preorder, postorder) {
  const valToIdx = {};
  postorder.forEach((num, idx) => {
    valToIdx[num] = idx;
  });
  const build = (preStart, preEnd, postStart, postEnd) => {
    if (preStart > preEnd) return null;
    if (preStart === preEnd) return new TreeNode(preorder[preStart]);
    const curRootNum = preorder[preStart];
    const leftChildNum = preorder[preStart + 1];
    const postSep = valToIdx[leftChildNum];
    const newPostLeftSize = postSep - postStart + 1;
    const leftChild = build(
      preStart + 1,
      preStart + newPostLeftSize,
      postStart,
      postSep
    );
    const rightChild = build(
      preStart + newPostLeftSize + 1,
      preEnd,
      postSep + 1,
      postEnd - 1
    );
    return new TreeNode(curRootNum, leftChild, rightChild);
  };
  return build(0, preorder.length - 1, 0, postorder.length - 1);
};

// 这道题和之前的题目105，106的区别就是没有中序遍历，也就是说我们找不到一个确定的中间节点。
// 这道题说可能存在多个答案，返回其中一种即可。
// 那么我们可以使用以下分割左右子树的规律就可以沿用之前的方法去解决问题了：
// 1、首先把前序遍历结果的第一个元素或者后序遍历结果的最后一个元素确定为根节点的值。
// 2、然后把前序遍历结果的第二个元素作为左子树的根节点的值。
// 3、在后序遍历结果中寻找左子树根节点的值，从而确定了左子树的索引边界，进而确定右子树的索引边界，递归构造左右子树即可。

// 扩展：思考问题：
// 为什么通过前序遍历和后序遍历结果还原的二叉树可能不唯一呢？
// 关键点在于：int leftRootVal = preorder[preStart + 1];
// 即上述规律中的第二点。
// 我们假设前序遍历的第二个元素是左子树的根节点，但实际上左子树有可能是空指针，那么这个元素就应该是右子树的根节点。
// 由于这里无法确切进行判断，所以导致了最终答案的不唯一。
