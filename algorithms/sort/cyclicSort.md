# Cyclic Sort Algorithm

The Cyclic Sort algorithm is a simple and efficient sorting algorithm, particularly useful when dealing with a continuous range of integers starting from 1 to `n`. The algorithm is named "cyclic" because it places each element in its correct position by iteratively swapping elements until the entire array is sorted.

## Motivation Behind Cyclic Sort

Cyclic Sort is designed for cases where you have a set of numbers from 1 to `n` in an array of size `n`. The naive approach might involve nested loops or extra space to keep track of positions, but Cyclic Sort optimizes this process by sorting the array in-place with a minimal number of swaps, making it both time-efficient and space-efficient.

## Core Concepts of Cyclic Sort

### Positioning Elements

The core idea behind Cyclic Sort is that, for an array of size `n` containing elements in the range from 1 to `n`, the correct position of any element `num` is at index `num - 1`.  
The algorithm iterates through the array and checks if each element is in its correct position. If not, it swaps the element with the one that currently occupies its correct position.

### In-Place Sorting

Cyclic Sort operates directly on the array without requiring additional memory for auxiliary data structures.  
The algorithm ensures that every element is placed in its correct position with a minimal number of swaps, making it particularly space-efficient.

## How Cyclic Sort Works

### Step 1: Iteration Over the Array

The algorithm starts by iterating through the array. For each element at index `i`, it checks if the element is in its correct position (i.e., if the element `arr[i]` is equal to `i + 1`). If not, it swaps the element with the one that belongs at index `i`.

### Step 2: Swap Elements

If an element is not in its correct position, swap it with the element that belongs to that position.  
Repeat this process until the current element is correctly placed.

### Step 3: Move to the Next Element

Once an element is in its correct position, move on to the next element and repeat the process until the entire array is sorted.
