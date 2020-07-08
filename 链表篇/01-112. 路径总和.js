
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  // 根节点为空
  if (root === null) return false;
  
  // 叶节点 同时 sum 参数等于叶节点值
  if (root.left === null && root.right === null) return root.val === sum;
  //当进行到最后一步的时候返回结果为true，则说明有，当返回为false，则说明没有

  // 总和减去当前值，并递归
  sum = sum - root.val
  return hasPathSum(root.left, sum) || hasPathSum(root.right, sum);
  //一层一层往下遍历结点，左结点，右结点，任意哪一边满足条件就算这个树满足题意
};


