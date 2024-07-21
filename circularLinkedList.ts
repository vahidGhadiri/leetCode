class CLLNode<T> {
    data: T
    next: CLLNode<T> | null
    constructor(data: T) {
        this.data = data
    }
}

interface ICircularLinkedList<T> {
    insertAfter: (node: CLLNode<T>, data: T) => CLLNode<T> | null
    // search: (fn: (data: T) => boolean) => CLLNode<T> | null
    // updateAtIndex: (index: number, data: T) => void
    insertInBegin: (data: T) => CLLNode<T>
    insertAtEnd: (data: T) => CLLNode<T>
    // delete: (node: CLLNode<T>) => void
    // reverseTraverse: () => T[]
    // hasCycle: () => boolean
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
        if (node === null) {
            return null
        }
        const newNode = new CLLNode(data)
        node.next = newNode

        if (node === this.tail) {
            this.tail = newNode
            this.tail.next = this.head
        }

        this.length++
        return newNode
    }

    public updateAtIndex(index: number, data: T): void {
        if(index < 0 || index > this.length || this.head === null) return 

        let current = this.head
        let currentIndex = 0

    }

    // public updateAtIndex(index: number, data: T): void {
    //     if (index < 0 || index >= this.length || this.head === null) {
    //         throw new Error("Index out of bounds or list is empty")
    //     }

    //     let current = this.head
    //     for (let i = 0; i < index; i++) {
    //         if (current === null) {
    //             throw new Error("Index out of bounds")
    //         }
    //         current = current.next
    //     }

    //     if (current !== null) {
    //         current.data = data
    //     }
    // }
}