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
    inOrderTraversal: (node: TreeNode<T> | null) => void
    preOrderTraversal: (node: TreeNode<T> | null) => void
    postOrderTraversal: (node: TreeNode<T> | null) => void
    search: (value: T, node: TreeNode<T> | null) => boolean
    maxDepth: (node: TreeNode<T> | null) => number;
    printTree: () => void
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

        // Print the current node value
        console.log(prefix + (isLeft ? '├── ' : '└── ') + node.value);

        // Calculate the new prefix for children
        const newPrefix = prefix + (isLeft ? '│   ' : '    ');

        // Recursive calls for left and right children
        this.printSubTree(node.left, newPrefix, true);
        this.printSubTree(node.right, newPrefix, false);
    }

    public printTree(): void {
        if (this.root === null) {
            console.log("Tree is empty.");
            return;
        }

        // Start printing from the root with an empty prefix
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

    public inOrderTraversal(node: TreeNode<T> | null): void {
        if (node !== null) {
            this.inOrderTraversal(node.left);
            console.log(node.value);
            this.inOrderTraversal(node.right);
        }
    }

    public preOrderTraversal(node: TreeNode<T> | null): void {
        if (node !== null) {
            console.log(node.value);
            this.preOrderTraversal(node.left);
            this.preOrderTraversal(node.right);
        }
    }

    public postOrderTraversal(node: TreeNode<T> | null): void {
        if (node !== null) {
            this.postOrderTraversal(node.left);
            this.postOrderTraversal(node.right);
            console.log(node.value);
        }
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

}

// Example usage:
const tree = new BinaryTree<number>();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(12);
tree.insert(18);

tree.printTree();
