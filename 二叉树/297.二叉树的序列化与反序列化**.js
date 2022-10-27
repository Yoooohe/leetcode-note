/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  if (!root) return "#";
  const left = serialize(root.left);
  const right = serialize(root.right);
  return `${root.val},${left},${right}`;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  const nodes = data.split(",");
  const helper = (nodes) => {
    const rootVal = nodes.shift();
    if (rootVal === "#") return null;
    const rootNode = new TreeNode(rootVal);
    rootNode.left = helper(nodes);
    rootNode.right = helper(nodes);
    return rootNode;
  };
  return helper(nodes);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

// 解题思路：序列化就是遍历，这个已经很熟悉了
// 反序列化的时候，我们知道第一个节点就是根节点，每拿出来一个节点，我们从数组中shift出来。
// 当leftChild处理完了，剩下就是rightChild了。
