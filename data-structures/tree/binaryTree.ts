
interface IDFS<T> {
    inOrder: T[],
    preOrder: T[],
    postOrder: T[]
}

interface IBinarySearchTree<T> {
    delete: (data: T, node: TreeNode<T> | null) => TreeNode<T> | null
    search: (data: T, node: TreeNode<T> | null) => boolean
    insert: (data: T) => void
    DFS: (node: TreeNode<T> | null) => IDFS<T>
    BFS: () => T[]

    invertTree: (node: TreeNode<T> | null) => TreeNode<T> | null
    countNodes: (node: TreeNode<T> | null) => number
    maxDepth: (node: TreeNode<T> | null) => number;
    isSymmetric: () => boolean
}

class TreeNode<T> {
    data: T
    right: TreeNode<T> | null
    left: TreeNode<T> | null

    constructor(data: T) {
        this.data = data
    }
}

class BinarySearchTree<T> implements IBinarySearchTree<T> {
    private root: TreeNode<T> | null = null

    private insertNode(node: TreeNode<T>, newNode: TreeNode<T>): void {
        if (newNode.data < node.data) {
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

    private inOrderTraversal(node: TreeNode<T> | null = this.root): T[] {
        const result: T[] = []

        function traverse(node: TreeNode<T> | null) {
            if (node === null) return
            traverse(node.left)
            result.push(node.data)
            traverse(node.right)
        }
        traverse(node)
        return result
    }

    private preOrderTraversal(node: TreeNode<T> | null = this.root): T[] {
        const result: T[] = []
        function traverse(node: TreeNode<T> | null) {
            if (node === null) return
            result.push(node.data)
            traverse(node.left)
            traverse(node.right)
        }
        traverse(node)
        return result
    }

    private postOrderTraversal(node: TreeNode<T> | null = this.root): T[] {
        const result: T[] = []
        function traverse(node: TreeNode<T> | null) {
            if (node === null) return
            traverse(node.left)
            traverse(node.right)
            result.push(node.data)
        }
        traverse(node)
        return result
    }

    private checkSymmetric(leftSubtree: TreeNode<T> | null, rightSubtree: TreeNode<T> | null): boolean {
        if (leftSubtree === null && rightSubtree === null) return true
        if (leftSubtree === null || rightSubtree === null) return false

        return (leftSubtree.data === rightSubtree.data) &&
            this.checkSymmetric(leftSubtree.left, rightSubtree.right) &&
            this.checkSymmetric(leftSubtree.right, rightSubtree.left)
    }

    public insert(data: T): void {
        const newNode = new TreeNode(data)
        if (this.root === null) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    public DFS(node: TreeNode<T> | null): IDFS<T> {
        return {
            inOrder: this.inOrderTraversal(node),
            preOrder: this.preOrderTraversal(node),
            postOrder: this.postOrderTraversal(node)
        };
    }

    public BFS(): T[] {
        const result: T[] = []
        const queue: TreeNode<T>[] = []

        if (this.root !== null) queue.push(this.root)

        while (queue.length > 0) {
            const node = queue.shift() as TreeNode<T>
            if (node !== null) {
                result.push(node.data)
                if (node.left !== null) queue.push(node.left)
                if (node.right !== null) queue.push(node.right)
            }
        }
        return result
    }

    public search(data: T, node: TreeNode<T> | null = this.root): boolean {
        if (node === null) return false
        if (data < node.data) {
            return this.search(data, node.left)
        } else if (data > node.data) {
            return this.search(data, node.right)
        } else {
            return true
        }
    }

    public delete(data: T, node: TreeNode<T> | null = this.root): TreeNode<T> | null {
        if (node === null) return null

        if (data < node.data) {
            node.left = this.delete(data, node.left)
        } else if (data > node.data) {
            node.right = this.delete(data, node.left)
        } else {
            //Leaf node
            if (node.left === null && node.right === null) return null
            //Only has right node
            if (node.left === null) return node.right
            //Only has left node
            if (node.right === null) return node.left
            //has left and right node
            let minNode = node.right
            while (minNode.left !== null) {
                minNode = node.left
            }
            node.data = minNode.data
            node.right = this.delete(minNode.data, node.right)
        }
        return node
    }

    public isSymmetric(): boolean {
        if (this.root === null) return true
        return this.checkSymmetric(this.root.left, this.root.right)
    }

    public countNodes(node: TreeNode<T> | null = this.root): number {
        if (node === null) return 0
        const leftNodes = this.countNodes(node.left)
        const rightNodes = this.countNodes(node.right)
        return 1 + leftNodes + rightNodes
    }

    public invertTree(node: TreeNode<T> | null = this.root): TreeNode<T> | null {
        if (node === null) return null;
        [node.left, node.right] = [node.right, node.left];
        this.invertTree(node.left);
        this.invertTree(node.right);

        return node;
    }

    public maxDepth(node: TreeNode<T> | null = this.root): number {
        if (node === null) return 0;
        const leftDepthLength: number = this.maxDepth(node.left);
        const rightDepthLength: number = this.maxDepth(node.right);

        return Math.max(leftDepthLength, rightDepthLength) + 1;
    }


}