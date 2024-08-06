/**
 ** 100. Same Tree
 ** https://leetcode.com/problems/same-tree/description/
Given the roots of two binary trees p and q, write a function to check if they are the same or not.
Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

Example 1:
Input: p = [1,2,3], q = [1,2,3]
Output: true

Example 2:
Input: p = [1,2], q = [1,null,2]
Output: false
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

/**
 * Solution #1: Recursion
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param p 
 * @param q 
 * @returns boolean
 */
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (p === null && q === null) return true
    if (p === null || q === null) return false

    const isSame = p.val === q.val &&
        isSameTree(p.left, q.left) &&
        isSameTree(p.right, q.right)

    return isSame
};


/**
 * Solution #2: BFS or DFS
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param p 
 * @param q 
 * @returns boolean
 */
function isSameTree2(p: TreeNode | null, q: TreeNode | null): boolean {
    if (p === null && q === null) return true
    if (p === null || q === null) return false

    const queue: [TreeNode | null, TreeNode | null][] = [[p, q]]

    while (queue.length > 0) {
        const [node1, node2] = queue.shift()!
        if (node1 === null && node2 === null) continue
        if (node1 === null || node2 === null || node1.val !== node2.val) return false

        queue.push([node1.left, node2.left])
        queue.push([node1.right, node2.right])
    }

    return true
}