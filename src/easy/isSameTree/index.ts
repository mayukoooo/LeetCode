// https://leetcode.com/problems/same-tree/description/
// algorithm: 二分木の深さ優先探索（DFS
type IsSameTree = (p: TreeNode | null, q: TreeNode | null) => boolean;

const isSameTree: IsSameTree = (p, q) => {
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
