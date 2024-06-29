class TreeNode<T> {
    value: T
    left: TreeNode<T> | null
    right: TreeNode<T> | null

    constructor(value: T) {
        this.value = value
    }
}

class BinaryTree<T> {
    root: TreeNode<T> | null = null

    private insertNode(node: TreeNode<T>, newNode: TreeNode<T>) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode
            } else {
                this.insertNode(node.left, newNode)
            }
        } else {
            if (node.right === null) {
                node.right = newNode
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    }

    private insert(value: T) {
        const newNode = new TreeNode(value)
        if (this.root === null) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    /**
     * Inorder traversal is one of the most popular ways of traversing a tree data structure. 
     * It is a type of depth-first search. The idea behind inorder traversal is to visit the left child, then the root node, and finally the right child.
     * preOrder: root > left > right
     * inOrder: left > root > right
     * postOrder: left > right > root
     */
    private inOrderTraversal(node: TreeNode<T> | null): void {
        if (node !== null) {
            this.inOrderTraversal(node.left)
            console.log(node.value)
            this.inOrderTraversal(node.right)
        }
    }

    private preOrderTraversal(node: TreeNode<T> | null): void {
        if (node !== null) {
            console.log(node.value)
            this.preOrderTraversal(node.left);
            this.preOrderTraversal(node.right);
        }
    }

    private postOrderTraversal(node: TreeNode<T> | null): void {
        if (node !== null) {
            this.postOrderTraversal(node.left);
            this.postOrderTraversal(node.right);
            console.log(node.value)
        }
    }

    search(value: T, node: TreeNode<T> | null = this.root): boolean {
        if (node === null) {
            return false
        }
        if (value < node.value) {
            return this.search(value, node.left)
        } else if (value > node.value) {
            return this.search(value, node.right)
        } else {
            return true
        }
    }
}