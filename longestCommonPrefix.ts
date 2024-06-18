function longestCommonPrefix(strs: string[]): string {
    let commonPrefix = "";

    if (strs.length === 0) return commonPrefix;

    const minLen = Math.min(...strs.map(s => s.length));

    for (let i = 0; i < minLen; i++) {
        const char = strs[0][i];
        for (const s of strs) {
            if (s[i] !== char) {
                return commonPrefix;
            }
        }
        commonPrefix += char;
        console.log(commonPrefix += char)
    }

    return commonPrefix;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
