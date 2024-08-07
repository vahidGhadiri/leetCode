/**
 * 118. Pascal's Triangle
 Given an integer numRows, return the first numRows of Pascal's triangle.
In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

Example 2:
Input: numRows = 1
Output: [[1]]
 */

const generate = (numRows: number): number[][] => {
    const res: number[][] = numRows ? [] : [[1]]

    for (let row = 0; row < numRows; row++) {
        const newRow = new Array(row + 1).fill(1)
        for (let col = 1; col < row; col++) {
            newRow[col] = res[row - 1][col - 1] + res[row - 1][col]
        }
        res.push(newRow)
    }

    return res
}

generate(4)