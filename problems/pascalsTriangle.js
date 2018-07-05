/*
Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.


In Pascal's triangle, each number is the sum of the two numbers directly above it.
*/
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows <= 0) return [];
    let result = [[1]];

    for (let i = 0; i < numRows - 1; i++) {
        let prev = result[i];
        let newSub = [1];

        for (let j = 0; j < prev.length - 1; j++) {
            newSub.push(prev[j] + prev[j + 1]);
        }

        newSub.push(1);
        result.push(newSub);
    }

    return result;
};
