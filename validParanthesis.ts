function isValid(s: string): boolean {
    const stack: string[] = [];
    const bracketMap: { [key: string]: string } = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (const char of s) {
        if (char in bracketMap) {
            const topElement = stack.length === 0 ? '#' : stack.pop();
            if (topElement !== bracketMap[char]) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
}
