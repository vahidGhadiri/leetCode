The Knuth-Morris-Pratt (KMP) algorithm is an efficient string-matching algorithm that is used to search for occurrences of a pattern within a text. It was developed by Donald Knuth, Vaughan Pratt, and James H. Morris in 1977, and it significantly improves upon the naive approach by avoiding redundant comparisons.

### Motivation Behind KMP

In the naive string-matching algorithm, the search for a pattern in a text may involve rechecking characters that have already been compared, especially when mismatches occur. The KMP algorithm optimizes this process by using information gleaned from previous comparisons to skip certain parts of the text, thus reducing the number of comparisons.

### Core Concepts of KMP

1.  **Prefix Function (Partial Match Table)**

    -   The key to the KMP algorithm's efficiency lies in its use of a preprocessing step to build a **prefix function** (also known as the "partial match" table or "failure function").
    -   The prefix function for a pattern encapsulates knowledge about how the pattern matches against shifts of itself. It computes the length of the longest proper prefix of the pattern that is also a suffix for each prefix of the pattern.
    -   This allows the algorithm to avoid unnecessary comparisons by knowing how far to shift the pattern when a mismatch occurs.
2.  **Pattern Shifts**

    -   When a mismatch occurs during the search, instead of shifting the pattern by one position (as in the naive approach), the KMP algorithm uses the prefix function to determine the optimal shift.
    -   This ensures that previously matched characters are not re-compared, making the algorithm more efficient.

### How KMP Works

#### Step 1: Preprocessing the Pattern (Building the Prefix Function)

Given a pattern `P` of length `m`, the prefix function `π` is an array of size `m`, where `π[i]` denotes the length of the longest proper prefix of the pattern `P[0..i]` that is also a suffix of `P[0..i]`.

-   **Proper Prefix:** A prefix of the string that is not equal to the entire string.
-   **Suffix:** A substring that ends at the last character of the string.

The prefix function can be constructed in `O(m)` time using the following approach:

```
function computePrefixFunction(pattern: string): number[] {
    const m = pattern.length;
    const pi = new Array(m).fill(0);
    let k = 0;

    for (let i = 1; i < m; i++) {
        while (k > 0 && pattern[k] !== pattern[i]) {
            k = pi[k - 1];
        }
        if (pattern[k] === pattern[i]) {
            k++;
        }
        pi[i] = k;
    }

    return pi;
}
```

#### Step 2: Searching the Text

Once the prefix function is built, the KMP algorithm searches the pattern `P` in the text `T` of length `n` as follows:

```
function KMP(text: string, pattern: string): number[] {
    const n = text.length;
    const m = pattern.length;
    const pi = computePrefixFunction(pattern);
    let j = 0; // index for pattern
    const result = [];

    for (let i = 0; i < n; i++) {
        while (j > 0 && pattern[j] !== text[i]) {
            j = pi[j - 1];
        }
        if (pattern[j] === text[i]) {
            j++;
        }
        if (j === m) {
            result.push(i - m + 1); // pattern found at index i - m + 1
            j = pi[j - 1];
        }
    }

    return result;
}
```

#### Explanation:

-   **Initialization:** Start with both `i` (text index) and `j` (pattern index) at 0.
-   **Matching:** If `text[i]` matches `pattern[j]`, move both `i` and `j` forward.
-   **Mismatch:** If there is a mismatch after `j` matches, use the prefix function to determine the next position of `j`.
-   **Pattern Found:** When `j` equals `m`, a full match of the pattern in the text is found, and its starting index is recorded.
-   **Continue Searching:** After recording the match, shift the pattern as determined by the prefix function and continue the search.

### Example

Let's walk through an example:

-   **Text:** `ababcabcabababd`
-   **Pattern:** `ababd`

1.  **Compute Prefix Function:**

    -   For pattern `ababd`, the prefix function `π` will be `[0, 0, 1, 2, 0]`.
2.  **Search Process:**

    -   Start comparing from the beginning of the text.
    -   When a mismatch occurs, use the prefix function to skip unnecessary comparisons and continue.

    The match for the pattern is found at index 10.

### Complexity

-   **Time Complexity:**

    -   Preprocessing (building prefix function): `O(m)`
    -   Searching: `O(n)`
    -   Total: `O(n + m)`
-   **Space Complexity:**

    -   The space complexity is `O(m)` for storing the prefix function.

### Use Cases

-   **Text Search**: Finding substrings efficiently in large bodies of text.
-   **Pattern Recognition**: Used in DNA sequence analysis, searching for motifs.
-   **Computational Biology**: Used in alignment algorithms and finding repeating patterns in genome sequences.

### Advantages

-   **Efficiency**: KMP is much more efficient than naive string matching, especially for long patterns.
-   **Deterministic**: It guarantees that the search will be done in linear time relative to the text length, regardless of the content.

### Limitations

-   **Preprocessing Overhead**: Although the preprocessing step is linear, it can be considered an overhead for very short patterns.
-   **Complexity in Understanding**: The algorithm is more complex to understand and implement compared to naive methods.

The KMP algorithm is a powerful tool for string matching that efficiently finds all occurrences of a pattern in a text by preprocessing the pattern and avoiding unnecessary comparisons during the search phase. Its optimal time complexity makes it suitable for large-scale text processing tasks.