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
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (!preorder.length) return null;
  if (preorder.length === 1) return new TreeNode(preorder[0]);
  const inorderSeparateNum = preorder[0];
  const inorderSeparateIdx = inorder.findIndex(
    (num) => num === inorderSeparateNum
  );
  const inorderLeftNums = inorder.slice(0, inorderSeparateIdx);
  const inorderRightNums = inorder.slice(
    inorderSeparateIdx + 1,
    inorder.length
  );
  const preorderSeparateIdx = inorderLeftNums.length + 1;
  const preorderLefttNums = preorder.slice(1, preorderSeparateIdx);
  const preorderRightNums = preorder.slice(
    preorderSeparateIdx,
    preorder.length
  );
  const leftChild = buildTree(preorderLefttNums, inorderLeftNums);
  const rightChild = buildTree(preorderRightNums, inorderRightNums);
  const curNode = new TreeNode(inorderSeparateNum, leftChild, rightChild);
  return curNode;
};

// 这道题的解法就是从前序遍历数组中找到中序遍历数组的中间节点，将其分成左右子树来解决
// 以上解法是我自己的写的，由于使用遍历找到index，导致耗时比较高
// 同时由于传入递归函数的参数中有数组，导致占用内存也比较高。
// 比较好的解法是：
// 使用map存储好inorder数组的value和index键值对，同时利用分割index来分解子问题，这样就不需要复制数组了。
// 可以参加106的解法～
