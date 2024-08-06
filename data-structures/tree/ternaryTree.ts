class TernaryTreeNode<T> {
    value: T
    right: TernaryTreeNode<T> | null
    left: TernaryTreeNode<T> | null
    middle: TernaryTreeNode<T> | null

    constructor(value: T) {
        this.value = value
    }
}

interface ITernaryTree<T> {
    insert: (value: T) => void
    inOrderTraversal: (node: TernaryTreeNode<T>) => T[]
    preOderTraversal: (node: TernaryTreeNode<T>) => T[]
    postOrderTraversal: (node: TernaryTreeNode<T>) => T[]
    search: (value: T, node: TernaryTreeNode<T>) => boolean
}

class TernaryTree<T> implements ITernaryTree<T>{
    root: TernaryTreeNode<T> | null = null

    private insertNode(node: TernaryTreeNode<T>, newNode: TernaryTreeNode<T>) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode
            } else {
                this.insertNode(node.left, newNode)
            }
        } else if (newNode.value > node.value) {
            if (node.right === null) {
                node.right = newNode
            } else {
                this.insertNode(node.right, newNode)
            }
        } else if (newNode.value === node.value) {
            if (node.middle === null) {
                node.middle = newNode
            } else {
                this.insertNode(node.middle, newNode)
            }
        }
    }

    public insert(value: T) {
        const newNode = new TernaryTreeNode(value)
        if (this.root === null) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    public inOrderTraversal(node: TernaryTreeNode<T> | null = this.root): T[] {
        const result: T[] = []
        function traverse(node: TernaryTreeNode<T> | null) {
            if (node === null) return
            traverse(node.left)
            result.push(node.value)
            traverse(node.middle)
            traverse(node.right)
        }
        traverse(node)
        return result
    }

    public preOderTraversal(node: TernaryTreeNode<T> | null = this.root): T[] {
        const result: T[] = []
        function traverse(node: TernaryTreeNode<T> | null) {
            if (node === null) return
            result.push(node.value)
            traverse(node.left)
            traverse(node.middle)
            traverse(node.right)
        }
        traverse(node)
        return result
    }

    public postOrderTraversal(node: TernaryTreeNode<T> | null = this.root) {
        const result: T[] = []
        function traverse(node: TernaryTreeNode<T> | null) {
            if (node === null) return null
            traverse(node.left)
            traverse(node.middle)
            traverse(node.right)
            result.push(node.value)
        }
        traverse(node)
        return result
    }

    public search(value: T, node: TernaryTreeNode<T> | null = this.root) {
        if (node === null) return false

        if (value < node.value) {
            return this.search(value, node.left)
        } else if (value === node.value) {
            return this.search(node.value, node.middle)
        } else if (value > node.value) {
            return this.search(node.value, node.right)
        } else {
            return true
        }
    }

    public countNodes(node: TernaryTreeNode<T> | null = this.root): number {
        if (node === null) return 0

        const leftNodes = this.countNodes(node.left)
        const middleNodes = this.countNodes(node.middle)
        const rightNodes = this.countNodes(node.right)

        return 1 + leftNodes + middleNodes + rightNodes

    }
}