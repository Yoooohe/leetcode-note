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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
  const resMap = {};
  let res = [];
  const traverse = (curNode) => {
    if (!curNode) return "#";
    const left = traverse(curNode.left);
    const right = traverse(curNode.right);
    const treeDesc = `${left}, ${right}, ${curNode.val}`;
    let frequent = resMap[treeDesc] || 0;
    if (frequent === 1) {
      res.push(curNode);
    }
    resMap[treeDesc] = frequent + 1;
    return treeDesc;
  };
  traverse(root);
  return res;
};

// 这道题的关键点在于：找到自己为节点的树长什么样，其他节点的树长什么样
// 那么就需要遍历节点，并且保存下来每个节点以自己为根节点的树的样子并将它存在外部的map中
// 如果map中找到了一次重复的这个树样式，就把这个节点push到结果数组中。
