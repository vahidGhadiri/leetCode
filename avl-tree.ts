class AVLNode<T> {
    constructor(
        public value: T,
        public left: AVLNode<T> | null = null,
        public right: AVLNode<T> | null = null,
        public height: number = 1
    ) { }
}

class AVLTree<T> {
    private root: AVLNode<T> | null = null;

    // Helper function to get the height of a node
    private getNodeHeight(node: AVLNode<T> | null): number {
        return node ? node.height : 0;
    }

    // Helper function to get the balance factor of a node
    private getBalanceFactor(node: AVLNode<T> | null): number {
        return node ? this.getNodeHeight(node.left) - this.getNodeHeight(node.right) : 0;
    }

    // Right rotation
    private rotateRight(unbalancedNode: AVLNode<T>): AVLNode<T> {
        const newRoot = unbalancedNode.left!;
        const rightSubtreeOfNewRoot = newRoot.right;

        // Perform rotation
        newRoot.right = unbalancedNode;
        unbalancedNode.left = rightSubtreeOfNewRoot;

        // Update heights
        unbalancedNode.height = Math.max(this.getNodeHeight(unbalancedNode.left), this.getNodeHeight(unbalancedNode.right)) + 1;
        newRoot.height = Math.max(this.getNodeHeight(newRoot.left), this.getNodeHeight(newRoot.right)) + 1;

        // Return new root
        return newRoot;
    }

    // Left rotation
    private rotateLeft(unbalancedNode: AVLNode<T>): AVLNode<T> {
        const newRoot = unbalancedNode.right!;
        const leftSubtreeOfNewRoot = newRoot.left;

        // Perform rotation
        newRoot.left = unbalancedNode;
        unbalancedNode.right = leftSubtreeOfNewRoot;

        // Update heights
        unbalancedNode.height = Math.max(this.getNodeHeight(unbalancedNode.left), this.getNodeHeight(unbalancedNode.right)) + 1;
        newRoot.height = Math.max(this.getNodeHeight(newRoot.left), this.getNodeHeight(newRoot.right)) + 1;

        // Return new root
        return newRoot;
    }

    // Insert a value into the AVL tree
    public insert(value: T): void {
        this.root = this.insertNode(this.root, value);
    }

    private insertNode(currentNode: AVLNode<T> | null, value: T): AVLNode<T> {
        // Perform normal BST insert
        if (currentNode === null) {
            return new AVLNode(value);
        }

        if (value < currentNode.value) {
            currentNode.left = this.insertNode(currentNode.left, value);
        } else if (value > currentNode.value) {
            currentNode.right = this.insertNode(currentNode.right, value);
        } else {
            // Duplicate values not allowed
            return currentNode;
        }

        // Update height of this ancestor node
        currentNode.height = 1 + Math.max(this.getNodeHeight(currentNode.left), this.getNodeHeight(currentNode.right));

        // Get the balance factor of this ancestor node
        const balanceFactor = this.getBalanceFactor(currentNode);

        // If the node becomes unbalanced, then there are 4 cases

        // Left Left Case
        if (balanceFactor > 1 && value < currentNode.left!.value) {
            return this.rotateRight(currentNode);
        }

        // Right Right Case
        if (balanceFactor < -1 && value > currentNode.right!.value) {
            return this.rotateLeft(currentNode);
        }

        // Left Right Case
        if (balanceFactor > 1 && value > currentNode.left!.value) {
            currentNode.left = this.rotateLeft(currentNode.left!);
            return this.rotateRight(currentNode);
        }

        // Right Left Case
        if (balanceFactor < -1 && value < currentNode.right!.value) {
            currentNode.right = this.rotateRight(currentNode.right!);
            return this.rotateLeft(currentNode);
        }

        // Return the (unchanged) node pointer
        return currentNode;
    }

    public printTree(): void {
        this.printTreeRecursively(this.root, "", true);
    }

    private printTreeRecursively(node: AVLNode<T> | null, indent: string, isLast: boolean): void {
        if (node !== null) {
            console.log(indent + (isLast ? "└─ " : "├─ ") + node.value);
            indent += isLast ? "   " : "│  ";
            this.printTreeRecursively(node.left, indent, false);
            this.printTreeRecursively(node.right, indent, true);
        }
    }
}

const avlTree = new AVLTree<number>();
avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);
avlTree.insert(40);
avlTree.insert(50);
avlTree.insert(100);
avlTree.insert(35);
avlTree.insert(45);
avlTree.insert(55);
avlTree.insert(65);
avlTree.insert(75);
avlTree.insert(85);

avlTree.printTree();
