/**
 * Given a binary matrix A, we want to flip the image horizontally, 
 * then invert it, and return the resulting image.

To flip an image horizontally means that each row of the image is reversed.  
For example, flipping [1, 1, 0] horizontally results in [0, 1, 1].

To invert an image means that each 0 is replaced by 1, 
and each 1 is replaced by 0. For example, inverting [0, 1, 1] 
results in [1, 0, 0].
 * @param {number[][]} A
 * @return {number[][]}
 * 
 */
var flipAndInvertImage = function(A) {
    for(let i = 0; i < A.length; i++) {
        result = [];
        for(let j = 0; j < A[i].length; j++) {
            if (A[i][j] === 1) {
                A[i][j] = 0
            } else {
                A[i][j] = 1
            }
            result.unshift(A[i][j]);
        }
        A[i] = result
    }
    
    return A
};

// takes no space below: n^2 time should test!!! 
var flipAndInvertImage = function(A) {
    for (let j = 0; j < A.length; j++) {
        for (let i = 0; i < Math.floor(A[0].length / 2); i++) {
            let backIdx = A[0].length - 1 - i;
            let temp = A[j][i];
            A[j][i] = A[j][backIdx];
            A[j][backIdx] = temp;
        }
    }

    for (let j = 0; j < A.length; j++) {
        for (let i = 0; i < A[0].length; i++) {
            if (A[j][i] === 0) {
                A[j][i] = 1;
            } else {
                A[j][i] = 0;
            }
        }
    }

    return A;
}

let matrix = [
    [1, 1, 1, 0, 0], 
    [0, 0, 1, 0, 1],
    [1, 0, 0, 0, 1], 
    [0, 0, 1, 0, 0]
]

console.log(flipAndInvertImage(matrix))