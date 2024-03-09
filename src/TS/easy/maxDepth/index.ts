// https://leetcode.com/problems/maximum-depth-of-binary-tree/description/
// 深さ = ノードがいくつ離れているか
import { TreeNode } from "../../shared/TreeNode";

type MaxDepth = (root: TreeNode | null) => number;
type DFS = (root: TreeNode | null, count: number) => number;

const maxDepth: MaxDepth = (root) => {
  if (!root) return 0;
  return DFS(root, 0);
};

const DFS: DFS = (root, count) => {
  if (!root) {
    return count;
  }

  count++;
  return Math.max(DFS(root.left, count), DFS(root.right, count));
};
