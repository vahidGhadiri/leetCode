/**
700. Search in a Binary Search Tree
You are given the root of a binary search tree (BST) and an integer val.
Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.

Example 1:
Input: root = [4,2,7,1,3], val = 2
Output: [2,1,3]

Example 2:
Input: root = [4,2,7,1,3], val = 5
Output: []
 */

//  Definition for a binary tree node.


//Solution #1: Recursion
//Time Complexity: O(h) ** h is height of the tree
//Space complexity: O(n) 
class BTSNode {
    val: number
    left: BTSNode | null
    right: BTSNode | null
    constructor(val?: number, left?: BTSNode | null, right?: BTSNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function searchBST(root: BTSNode | null, val: number): BTSNode | null {
    if (root === null) return null

    if (root.val < val) {
        return searchBST(root.right, val)
    } else if (root.val > val) {
        return searchBST(root.left, val)
    } else {
        return root
    }
};

//Solution #2: Iterative 
function searchBinaryTree(root: BTSNode | null, val: number): BTSNode | null {
    while (root !== null) {
        if (root.val === val) {
            return root
        } else if (root.val < val) {
            root = root.right
        } else {
            root = root.left
        }
    }
    return null
}