/**
 ** 146. LRU Cache
Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.
Implement the LRUCache class:
LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
int get(int key) Return the value of the key if the key exists, otherwise return -1.
void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
The functions get and put must each run in O(1) average time complexity.

Example 1:
Input: 
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]

Output:
[null, null, null, 1, null, -1, null, -1, 3, 4]

LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);    // return 4 
 */

class DLLNode<T> {
    prev: DLLNode<T> | null
    next: DLLNode<T> | null
    key: number | null
    data: T
    constructor(data: T, key: number | null) {
        this.data = data
        this.key = key
    }
}

class LRUCache<T> {
    private capacity: number = 0
    private hashmap: Map<number, DLLNode<T>>
    private head: DLLNode<T> | null = null
    private tail: DLLNode<T> | null = null

    constructor(capacity: number) {
        this.hashmap = new Map<number, DLLNode<T>>()
        this.capacity = capacity
    }

    private insertInBegin(data: T): DLLNode<T> {
        const newNode = new DLLNode(data, null)
        newNode.next = this.head

        if (this.head === null) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.head.prev = this.head
            this.head = newNode
            this.tail!.next = this.head
        }

        return newNode
    }

    private delete(node: DLLNode<T>): void {
        if (!node) return;

        if (node === this.head) {
            this.head = node.next;
            if (this.head) {
                this.head.prev = null;
            } else {
                this.tail = null;
            }
        }

        if (node === this.tail) {
            this.tail = node.prev;
            if (this.tail) {
                this.tail.next = null;
            } else {
                this.head = null;
            }
        }

        if (node.prev) {
            node.prev.next = node.next;
        }
        if (node.next) {
            node.next.prev = node.prev;
        }

        node.prev = null;
        node.next = null;

    }

    private moveToHead(node: DLLNode<T>) {
        this.delete(node)
        this.insertInBegin(node.data)
    }

    private removeLRUNode(): void {
        if (this.tail) {
            this.hashmap.delete(this.tail.key!);
            this.delete(this.tail);
        }
    }

    public get(key: number): number | T {
        let node = this.hashmap.get(key)
        if (node === null) return -1

        this.moveToHead(node!)
        return node!.data
    }

    public put(key: number, data: T): void {
        let node = this.hashmap.get(key) as DLLNode<T>

        if (node !== null) {
            node.data = data
            this.moveToHead(node)
        } else {
            const node = new DLLNode(data, key)
            this.hashmap.set(key, node)
            this.moveToHead(node)

            if (this.hashmap.size > this.capacity) {
                this.removeLRUNode()
            }
        }
    }
}




/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */