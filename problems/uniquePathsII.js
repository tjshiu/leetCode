/*
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

Now consider if some obstacles are added to the grids. How many unique paths would there be?



An obstacle and empty space is marked as 1 and 0 respectively in the grid.

Note: m and n will be at most 100.

Example 1:

Input:
[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
Output: 2
Explanation:
There is one obstacle in the middle of the 3x3 grid above.
There are two ways to reach the bottom-right corner:
1. Right -> Right -> Down -> Down
2. Down -> Down -> Right -> Right
*/

var uniquePathsWithObstacles = function(obstacleGrid) {
    if (obstacleGrid[0][0] === 1) return 0;
    let dp = new Array(obstacleGrid.length);
    
    for (let r = 0; r < obstacleGrid.length; r++) {
        let newRow = new Array(obstacleGrid[0].length);
        dp[r] = newRow;
        for (let c = 0; c < obstacleGrid[0].length; c++) {
            if (r === 0 && c === 0) {
                dp[r][c] = 1;
            } else if (r === 0) {
                dp[r][c] = (dp[r][c - 1] || 0)
            } else {
                dp[r][c] = (dp[r -1][c] || 0) + (dp[r][c - 1] || 0) + 0
            }
            
            if (obstacleGrid[r][c] === 1) {
                dp[r][c] = 0;
            }
        }
    }
    
    return dp[obstacleGrid.length - 1][obstacleGrid[0].length - 1];
};

var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length
    const n = obstacleGrid[0].length
    let steps = new Array(n).fill(0)
    steps[0] = 1
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (obstacleGrid[i][j]) {
                steps[j] = 0
            } else if (j > 0) {
                steps[j] += steps[j - 1]
            }
        }
    }
    return steps[n - 1]
};