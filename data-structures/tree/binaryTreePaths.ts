/**
 * 257. Binary Tree Paths
Given the root of a binary tree, return all root-to-leaf paths in any order.
A leaf is a node with no children.

Example 1:
Input: root = [1,2,3,null,5]
Output: ["1->2->5","1->3"]

Example 2:
Input: root = [1]
Output: ["1"]
 */


class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function binaryTreePaths(root: TreeNode | null): string[] {
    const paths: string[] = []
    if (root === null) return paths

    function dfs(node: TreeNode | null, currentPath: string) {
        if (node === null) return

        currentPath += node.val.toString()
        if (node.left === null && node.right === null) {
            paths.push(currentPath)
        } else {
            currentPath += "->"
            if (node.left !== null) dfs(node.left, currentPath)
            if (node.right !== null) dfs(node.right, currentPath)
        }
    }

    dfs(root, "")
    return paths
};

