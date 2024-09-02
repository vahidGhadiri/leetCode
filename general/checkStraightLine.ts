/**
 * * 1232. Check If It Is a Straight Line
 * * https://leetcode.com/problems/check-if-it-is-a-straight-line/description/
You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

Example 1:
Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
Output: true

Example 2:
Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
Output: false
 */

/**
 * Solution #1: Slope geometric
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param coordinates 
 */
function checkStraightLine(coordinates: number[][]): boolean {
    if (coordinates.length <= 2) return true

    const [x0, y0] = coordinates[0]
    const [x1, y1] = coordinates[1]

    for (let i = 2; i < coordinates.length; i++) {
        const [x2, y2] = coordinates[i]
        if ((y1 - y0) * (x2 - x1) !== (y2 - y1) * (x1 - x0)) {
            return false
        }
    }
    return true
};