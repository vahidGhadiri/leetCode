export class Node<T>{
    public next: Node<T> | null
    constructor(public data: T) { }
}
interface ILinkedList<T> {
    search: (fn: (data: T) => boolean) => Node<T> | null
    deleteDuplicates: (head: Node<T> | null) => void
    updateAtIndex: (index: number, data: T) => void
    insertInBegin: (data: T) => Node<T>
    insertAtEnd: (data: T) => Node<T>
    delete: (node: Node<T>) => void
    isEmpty: () => boolean
    traverse: () => T[]
    size: () => number
    clear: () => void
}
export class LinkedList<T> implements ILinkedList<T> {
    private head: Node<T> | null
    private length: number


    public insertInBegin(data: T): Node<T> {
        const newNode = new Node(data)
        this.head = newNode
        this.length++
        return newNode
    }


    public insertAtEnd(data: T): Node<T> {
        const newNode = new Node(data)

        if (this.head === null) {
            this.head = newNode
        } else {
            let current = this.head
            while (current.next !== null) {
                current = current.next
            }
            current.next = newNode
        }
        this.length++
        return newNode
    }

    public updateAtIndex(index: number, data: T): void {
        if (index < 0 || index >= this.length) return;

        let current = this.head;
        let currentIndex = 0;

        while (currentIndex < index && current !== null) {
            current = current.next;
            currentIndex++;
        }

        if (current !== null) {
            current.data = data;
        }
    }


    public delete(node: Node<T>): void {
        if (this.head === null) return
        if (this.head === node) {
            this.head = this.head.next
            this.length--
            return
        }

        let current = this.head
        while (current.next !== null) {
            if (current.next === node) {
                current.next = current.next.next
                this.length--
                return
            }
            current = current.next
        }
    }

    public deleteDuplicates(head: Node<T> | null): void {
        if (!head || !head?.next) return
        let current = this.head
        while (current && current.next) {
            if (current.data === current.next.data) {
                current.next = current.next.next
                this.length--
            } else {
                current = current.next
            }
        }
    }

    public traverse(): T[] {
        let current = this.head
        const stack: T[] = []
        while (current !== null) {
            stack.push(current.data)
            current = current.next
        }
        return stack
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

    public size(): number {
        return this.length
    }


    public isEmpty(): boolean {
        return this.length === 0
    }

    public clear(): void {
        this.head = null
        this.length = 0
    }
}