/**
 * 566. Reshape the Matrix
In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.
You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.
The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.
If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

Example 1:
Input: mat = [[1,2],[3,4]], r = 1, c = 4
Output: [[1,2,3,4]]

Example 2:
Input: mat = [[1,2],[3,4]], r = 2, c = 4
Output: [[1,2],[3,4]]
 */

function matrixReshape(mat: number[][], r: number, c: number): number[][] {
    //Rows
    const m = mat.length
    //Columns
    const n = mat[0].length

    //Check if reshape is possible
    if (m * n !== r * c) return mat


    //Initialize Reshaped matrix
    const reshapedMatrix: number[][] = []
    for (let i = 0; i < r; i++) {
        reshapedMatrix.push([])
    }


    //Processing of reshape 
    let row = 0
    let col = 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            reshapedMatrix[row][col] = mat[i][j]
            col++
            if (col === c) {
                col = 0
                row++
            }
        }
    }

    return reshapedMatrix
};

const test = [
    [1, 2],
    [3, 4],
    [5, 6]
]
matrixReshape(test, 3, 2)