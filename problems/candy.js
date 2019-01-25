/*There are N children standing in a line. Each child is assigned a rating value.

You are giving candies to these children subjected to the following requirements:

Each child must have at least one candy.
Children with a higher rating get more candies than their neighbors.
What is the minimum candies you must give?

Example 1:

Input: [1,0,2]
Output: 5
Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.
Example 2:

Input: [1,2,2]
Output: 4
Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
             The third child gets 1 candy because it satisfies the above two conditions.
*/

/**
 * @param {number[]} ratings
 * @return {number}

 */

var candy = function(ratings) {
    if (ratings.length === 0) return 0;
    let candies = 1;
    let up = 0;
    let down = 0;
    let peak = 0;
    for (let i = 1; i < ratings.length; i++) {
        let prev = ratings[i - 1];
        let curr = ratings[i];
        if (curr > prev) {
            peak = up + 1;
            up++;
            down = 0;
            candies += 1 + up;
        } else if (prev === curr) {
            peak = up = down = 0;
            candies += 1;
        } else {
            up = 0;
            down++;
            candies += 1 + down + (peak >= down ? -1 : 0);
        }
    }
    return candies;
};