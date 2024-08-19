class KMP {
    private pattern: string;  // Pattern to search for
    private prefixTable: number[];  // Prefix table (LPS array)

    // Constructor initializes the pattern and builds the prefix table
    constructor(pattern: string) {
        this.pattern = pattern;
        this.prefixTable = this.buildPrefixTable(pattern);  // Build the prefix table
    }

    // Build the prefix table (LPS array) for the given pattern
    private buildPrefixTable(pattern: string): number[] {
        const lps: number[] = new Array(pattern.length).fill(0);  // Initialize LPS array with zeros
        let length = 0;  // Length of the previous longest prefix suffix
        let i = 1;  // Start from the second character in the pattern

        // Iterate through the pattern to populate the LPS array
        while (i < pattern.length) {
            if (pattern[i] === pattern[length]) {
                length++;  // Increment length of the current longest prefix suffix
                lps[i] = length;  // Update LPS array
                i++;  // Move to the next character in the pattern
            } else {
                // If there's a mismatch and length is not zero, use the previous LPS value
                if (length !== 0) {
                    length = lps[length - 1];  // Fall back to the previous longest prefix suffix
                } else {
                    lps[i] = 0;  // If length is zero, set LPS value to zero
                    i++;  // Move to the next character in the pattern
                }
            }
        }

        return lps;  // Return the completed LPS array
    }

    // Search for the pattern in the given text
    public search(text: string): number[] {
        const pattern = this.pattern;
        const textLength = text.length;  // Length of the text
        const patternLength = pattern.length;  // Length of the pattern
        const lps = this.prefixTable;  // Get the prefix table
        const results: number[] = [];  // Array to store the indices of matches

        let i = 0;  // Index for the text
        let j = 0;  // Index for the pattern

        // Iterate through the text to find matches of the pattern
        while (i < textLength) {
            if (pattern[j] === text[i]) {
                i++;  // Move to the next character in the text
                j++;  // Move to the next character in the pattern
            }

            // If the pattern is found
            if (j === patternLength) {
                results.push(i - j);  // Add the start index of the match to the results
                j = lps[j - 1];  // Use the prefix table to find the next potential match
            } else if (i < textLength && pattern[j] !== text[i]) {
                // If there's a mismatch and j is not zero, use the prefix table to skip comparisons
                if (j !== 0) {
                    j = lps[j - 1];  // Use the previous LPS value
                } else {
                    i++;  // Move to the next character in the text
                }
            }
        }

        return results;  // Return the array of starting indices where the pattern was found
    }
}

// Example usage
const text = "ababcababcabcabc";
const pattern = "abc";
const kmp = new KMP(pattern);  // Create an instance of KMP with the given pattern
const positions = kmp.search(text);  // Search for the pattern in the text

console.log("Pattern found at indices:", positions);  // Output the positions where the pattern was found
