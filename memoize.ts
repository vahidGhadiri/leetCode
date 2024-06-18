function memoize<T extends [], K>(fn: (...args: T) => K) {
    const cache = new Map()
    return (...args: T): K => {
        const key = JSON.stringify(args)
        if (cache.has(key)) {
            return cache.get(key)
        } else {
            const result = fn(...args)
            cache.set(key, result)
            return result
        }
    }
}