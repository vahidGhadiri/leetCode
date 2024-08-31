# Quick Sort Algorithm

Quick Sort is a highly efficient and widely-used sorting algorithm that follows the divide-and-conquer paradigm. It is particularly known for its efficiency in sorting large datasets and its ability to perform well in most scenarios.

## Motivation Behind Quick Sort

Quick Sort is designed to efficiently sort an array by dividing the problem into smaller subproblems and solving each recursively. Unlike other sorting algorithms that may require additional memory or nested loops, Quick Sort sorts the array in place and can achieve better performance with an average time complexity of `O(n log n)`.

## Core Concepts of Quick Sort

### Pivot Selection

The core idea of Quick Sort revolves around selecting a 'pivot' element from the array. The pivot acts as a reference point for dividing the array into two sub-arrays: one with elements less than the pivot and one with elements greater than the pivot. The choice of pivot can significantly impact the algorithm's efficiency.

### Partitioning the Array

Once a pivot is chosen, the array is partitioned such that all elements less than the pivot are moved to its left, and all elements greater than the pivot are moved to its right. The pivot then ends up in its correct position within the sorted array.

### Recursive Sorting

After partitioning, Quick Sort recursively sorts the sub-arrays on either side of the pivot. This process continues until the entire array is sorted.

## How Quick Sort Works

### Step 1: Choose a Pivot

The algorithm begins by selecting a pivot element from the array. The pivot can be the first element, the last element, or a randomly chosen element.

### Step 2: Partition the Array

The next step is to partition the array. All elements less than the pivot are moved to the left of the pivot, and all elements greater than the pivot are moved to the right. This ensures that the pivot is in its correct position in the sorted array.

### Step 3: Recursively Apply Quick Sort

After partitioning, Quick Sort is recursively applied to the sub-arrays formed by dividing the array at the pivot. The left sub-array (elements less than the pivot) and the right sub-array (elements greater than the pivot) are each sorted using the same process.

### Step 4: Combine the Results

Once the sub-arrays are sorted, they are combined to form the final sorted array. Since Quick Sort works in place, no additional merging step is required, and the sorted array is obtained by combining the sorted sub-arrays.

## Performance

- **Big-O**: `O(n)`
- **Big-Omega**: `Ω(n)`
- **Big-Theta**: `Θ(n)`

If you want to include these in a sentence or explanation:

- **Worst-case**: `O(n^2)`
- **Best-case**: `Ω(n log n)`
- **Average-case**: `Θ(n log n)`
