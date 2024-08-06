export class Node<T> {
    next: Node<T> | null
    prev: Node<T> | null
    data: T;
    constructor(data: T) {
        this.data = data
    }
}

interface IDoubleLinkedList<T> {
    insertAfter: (node: Node<T>, data: T) => Node<T> | null
    search: (fn: (data: T) => boolean) => Node<T> | null
    updateAtIndex: (index: number, data: T) => void
    insertInBegin: (data: T) => Node<T>
    insertAtEnd: (data: T) => Node<T>
    delete: (node: Node<T>) => void
    reverseTraverse: () => T[]
    hasCycle: () => boolean
    traverse: () => T[]
}

export class DoubleLinkedList<T> implements IDoubleLinkedList<T> {
    private head: Node<T> | null = null
    private tail: Node<T> | null = null
    private length: number


    public insertInBegin(data: T): Node<T> {
        const newNode = new Node(data)
        newNode.next = this.head

        if (this.head !== null) {
            this.head.prev = newNode
        } else {
            this.tail = newNode
        }
        this.head = newNode
        this.length++
        return newNode
    }

    public insertAtEnd(data: T): Node<T> {
        const newNode = new Node(data)
        if (this.tail === null) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }

        this.length++
        return newNode
    }

    public insertAfter(node: Node<T>, data: T): Node<T> | null {
        if (node === null) return null;

        const newNode = new Node(data);
        const nextNode = node.next;

        node.next = newNode;
        newNode.prev = node;
        newNode.next = nextNode;

        if (nextNode !== null) {
            nextNode.prev = newNode;
        } else {
            this.tail = newNode;
        }

        this.length++;
        return newNode;
    }

    public search(fn: (data: T) => boolean): Node<T> | null {
        let current = this.head
        while (current !== null) {
            if (fn(current.data)) {
                return current
            }
            current = current.next
        }
        return null
    }

    public updateAtIndex(index: number, data: T): void {
        if (index < 0 || index >= this.length) return

        let current = this.head
        let currentIndex = 0

        while (currentIndex < index && current !== null) {
            current = current.next
            currentIndex++
        }

        if (current !== null) {
            current.data = data
        }

    }

    public delete(node: Node<T>): void {
        if (node.prev !== null) {
            node.prev.next = node.next
        } else {
            this.head = node.next
        }

        if (node.next !== null) {
            node.next.prev = node.prev
        } else {
            this.tail = node.prev
        }

        this.length--
    }

    public traverse(): T[] {
        let current = this.head
        let stack: T[] = []

        while (current !== null) {
            stack.push(current.data)
            current = current.next
        }
        return stack
    }

    public reverseTraverse(): T[] {
        let current = this.tail
        let stack: T[] = []
        while (current !== null) {
            stack.push(current.data)
            current = current.prev
        }
        return stack
    }

    //Using Floyd's cycle algorithm (also tortoise or hare algorithm)
    public hasCycle(): boolean {
        let current = this.head
        if (current === null) return false

        let slowPointer = this.head
        let fastPointer = this.head

        while (fastPointer !== null && fastPointer.next !== null) {
            slowPointer = slowPointer?.next as Node<T>
            fastPointer = fastPointer.next.next as Node<T>

            if (slowPointer === fastPointer) {
                return true
            }
        }

        return false
    }
}