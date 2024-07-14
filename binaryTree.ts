class TreeNode<T> {
    value: T
    left: TreeNode<T> | null = null
    right: TreeNode<T> | null = null

    constructor(value: T) {
        this.value = value
    }
}

interface IBinaryTree<T> {
    insert: (value: T) => void
    inOrderTraversal: (node: TreeNode<T> | null) => T[]
    preOrderTraversal: (node: TreeNode<T> | null) => T[]
    postOrderTraversal: (node: TreeNode<T> | null) => T[]
    search: (value: T, node: TreeNode<T> | null) => boolean
    maxDepth: (node: TreeNode<T> | null) => number;
    delete: (value: T, node: TreeNode<T>) => TreeNode<T> | null
    countNodes: (node: TreeNode<T> | null) => number
    printTree: () => void
    invertTree: (node: TreeNode<T> | null) => TreeNode<T> | null
}


class BinaryTree<T> implements IBinaryTree<T> {
    root: TreeNode<T> | null = null;

    private insertNode(node: TreeNode<T>, newNode: TreeNode<T>) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    private printSubTree(node: TreeNode<T> | null, prefix: string, isLeft: boolean): void {
        if (node === null) return;
        console.log(prefix + (isLeft ? '├── ' : '└── ') + node.value);

        const newPrefix = prefix + (isLeft ? '│   ' : '    ');
        this.printSubTree(node.left, newPrefix, true);
        this.printSubTree(node.right, newPrefix, false);
    }

    public printTree(): void {
        if (this.root === null) {
            console.log("Tree is empty.");
            return;
        }

        this.printSubTree(this.root, '', false);
        console.log("*** End of tree ***");
    }


    public insert(value: T) {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    public inOrderTraversal(node: TreeNode<T> | null = this.root): T[] {
        const result: T[] = []
        function traverse(node: TreeNode<T> | null) {
            if (node === null) return
            traverse(node.left)
            result.push(node.value)
            traverse(node.right)
        }
        traverse(node)
        return result
    }

    public preOrderTraversal(node: TreeNode<T> | null): T[] {
        const result: T[] = []

        function traverse(node: TreeNode<T> | null) {
            if (node === null) return
            result.push(node.value)
            traverse(node.left)
            traverse(node.right)
        }
        traverse(node)
        return result
    }

    public postOrderTraversal(node: TreeNode<T> | null = this.root): T[] {
        const result: T[] = []

        function traverse(node: TreeNode<T> | null) {
            if (node === null) return
            traverse(node.left)
            traverse(node.right)
            result.push(node.value)
        }
        traverse(node)
        return result
    }

    public search(value: T, node: TreeNode<T> | null = this.root): boolean {
        if (node === null) {
            return false;
        }
        if (value < node.value) {
            return this.search(value, node.left);
        } else if (value > node.value) {
            return this.search(value, node.right);
        } else {
            return true;
        }
    }

    public maxDepth(node: TreeNode<T> | null = this.root): number {
        if (node === null) return 0;
        const leftDepthLength: number = this.maxDepth(node.left);
        const rightDepthLength: number = this.maxDepth(node.right);

        return Math.max(leftDepthLength, rightDepthLength) + 1;
    }

    public delete(value: T, node: TreeNode<T> | null = this.root): TreeNode<T> | null {
        if (node === null) return null

        if (value < node.value) {
            node.left = this.delete(value, node.left)
        } else if (value > node.value) {
            node.right = this.delete(value, node.right)
        } else {
            if (node.left === null && node.right === null) {
                return null
            }
            if (node.left === null) {
                return node.right
            }

            if (node.right === null) {
                return node.left
            }

            let minNode = node.right
            while (minNode.left !== null) {
                minNode = minNode.left
            }
            node.value = minNode.value
            node.right = this.delete(minNode.value, node.right)
        }
        return node
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

    public BFS(): T[] {
        const result: T[] = [];
        const queue: (TreeNode<T> | null)[] = [];

        if (this.root !== null) queue.push(this.root);

        while (queue.length > 0) {
            const node = queue.shift() as TreeNode<T> | null
            if (node !== null) {
                result.push(node.value);
                if (node.left !== null) queue.push(node.left);
                if (node.right !== null) queue.push(node.right);
            }
        }
        return result;
    }
}

const tree = new BinaryTree<number>();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(12);
tree.insert(18);

console.log("Binary Tree Structure:");
tree.printTree();

console.log("\nIn-Order Traversal:");
tree.inOrderTraversal(tree.root);

console.log("\nPre-Order Traversal:");
tree.preOrderTraversal(tree.root);

console.log("\nPost-Order Traversal:");
tree.postOrderTraversal(tree.root);

console.log("\nSearch for value 7:", tree.search(7));
console.log("Search for value 20:", tree.search(20));

console.log("\nMaximum Depth of the Tree:", tree.maxDepth());