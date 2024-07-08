/**
 * Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 * ƒ
Example 1:
Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.

Example 2:
Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
 
 * @param haystack 
 * @param needle 
 * @returns 
 */

//solution #1
function strStr(haystack: string, needle: string): number {
    if (needle === "" || needle.length > haystack.length) return -1
    return haystack.indexOf(needle)
};

//Knuth-morris-pratt algorithm 
function generateLPS(needle: string): number[] {
    const lps = new Array(needle.length).fill(0);
    let j = 0;
    let i = 1;

    while (i < needle.length) {
        if (needle[i] === needle[j]) {
            j++;
            lps[i] = j;
            i++;
        } else {
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }

    return lps;
}


function kmpSearch(haystack: string, needle: string): number {
    if (needle.length === 0) return 0; // empty needle is always found at index 0
    // Step 1: Build the partial match table (LPS - Longest Prefix Suffix) for the needle
    const lps: number[] = generateLPS(needle);
    // Step 2: Perform the search using the KMP algorithm
    let i = 0; // index for haystack
    let j = 0; // index for needle
    while (i < haystack.length) {
        if (haystack[i] === needle[j]) {
            i++;
            j++;
        }
        if (j === needle.length) {
            return i - j; // found needle at index i - j in haystack
        } else if (i < haystack.length && haystack[i] !== needle[j]) {
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }

    return -1; // needle not found in haystack
}
