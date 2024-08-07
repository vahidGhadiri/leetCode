class CLLNode<T> {
    data: T
    next: CLLNode<T> | null
    constructor(data: T) {
        this.data = data
    }
}

interface ICircularLinkedList<T> {
    insertAfter: (node: CLLNode<T>, data: T) => CLLNode<T> | null
    search: (fn: (data: T) => boolean) => CLLNode<T> | null
    updateAtIndex: (index: number, data: T) => void
    insertInBegin: (data: T) => CLLNode<T>
    insertAtEnd: (data: T) => CLLNode<T>
    delete: (node: CLLNode<T>) => void
    // reverseTraverse: () => T[]
    // traverse: () => T[]
}

class CircularLinkedList<T> implements ICircularLinkedList<T> {
    private head: CLLNode<T> | null = null
    private tail: CLLNode<T> | null = null
    private length: number = 0

    public insertInBegin(data: T): CLLNode<T> {
        const newNode = new CLLNode(data)

        if (this.head === null) {
            this.head = newNode
            this.tail = newNode
            newNode.next = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
            this.tail!.next = newNode
        }

        this.length++
        return newNode
    }

    public insertAtEnd(data: T): CLLNode<T> {
        const newNode = new CLLNode(data)

        if (this.head === null) {
            this.head = newNode
            this.tail = newNode
            newNode.next = newNode
        } else {
            this.tail!.next = newNode
            newNode.next = this.head
            this.tail = newNode
        }

        this.length++
        return newNode
    }

    public insertAfter(node: CLLNode<T>, data: T): CLLNode<T> | null {
        if (!node) {
            return null;
        }
        const newNode = new CLLNode(data);
        newNode.next = node.next;
        node.next = newNode;

        if (node === this.tail) {
            this.tail = newNode;
            this.tail.next = this.head;
        }

        this.length++;
        return newNode;
    }


    public updateAtIndex(index: number, data: T): void {
        if (index < 0 || index > this.length) {
            return
        }


        let currentNode = this.head
        let currentIndex = 0

        while (currentIndex < index) {
            currentNode = currentNode!.next
            currentIndex++
        }

        currentNode!.data = data
    }

    public search(fn: (data: T) => boolean): CLLNode<T> | null {
        if (this.head === null) return null
        let currentNode = this.head

        do {
            if (fn(currentNode.data)) {
                return currentNode
            }
        } while (currentNode !== this.head)
        return null
    }

    public delete(node: CLLNode<T>): void {
        if (this.head === null) return
        let currentNode = this.head

        if (node === currentNode) {
            if (this.head === this.tail) {
                this.head = null
                this.tail = null
            } else {
                this.head = currentNode.next
                this.tail!.next = this.head
            }
        }

        do {
            if (currentNode.next === node) {
                currentNode.next = node.next
                if (node === this.tail) {
                    currentNode = this.tail
                }
                this.length--
                return
            }
        } while (currentNode !== this.head)
    }

    public traverse(): T[] {
        const result: T[] = []
        if (this.head === null) return result

        let current = this.head as CLLNode<T> | null

        do {
            result.push(current!.data)
            current = current!.next
        } while (current !== this.head)
        return result
    }


    public reverseTraverse(): T[] {
        const result: T[] = []
        if (this.head === null) return result

        let current = this.head as CLLNode<T> | null

        do {
            result.push(current!.data)
            let prevNode: CLLNode<T> | null = this.head
            while (prevNode!.next !== current) {
                prevNode = prevNode!.next
            }
            current = prevNode
        } while (current !== this.head)

        return result
    }
}