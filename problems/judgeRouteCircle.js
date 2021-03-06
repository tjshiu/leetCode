/*
Initially, there is a Robot at position (0, 0). Given a sequence of its moves, judge if this robot makes a circle, which means it moves back to the original place.

The move sequence is represented by a string. And each move is represent by a character. The valid robot moves are R (Right), L (Left), U (Up) and D (down). The output should be true or false representing whether the robot makes a circle.

Example 1:
Input: "UD"
Output: true
Example 2:
Input: "LL"
Output: false
*/

/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let lR = 0;
    let uD = 0;
    
    for (let i = 0; i < moves.length; i++) {
        move = moves[i];
        if (move === "L") {
            lR += 1;
        } else if (move === "R") {
            lR -= 1;
        } else if (move === "U") {
            uD += 1;
        } else {
            uD -= 1;
        }
    }
    
    return uD === 0 && lR === 0
};