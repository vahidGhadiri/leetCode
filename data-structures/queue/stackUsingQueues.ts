class MyStack {
    private queue1: number[]
    private queue2: number[]

    constructor() {
        this.queue1 = []
        this.queue2 = []
    }
    push(x: number) {
        while (this.queue1.length > 0) {
            this.queue2.push(this.queue1.shift()!)
        }
        this.queue1.push(x)
        while (this.queue2.length > 0) {
            this.queue1.push(this.queue2.shift()!)
        }
    }

    pop(): number {
        return this.queue1.shift()!
    }

    top(): number {
        return this.queue1[0]
    }
    empty(): boolean {
        return this.queue1.length === 0
    }
}