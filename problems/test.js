var missingNumber = function(nums) {
    let missingNum = 0;
    for (let i = 0; i < nums.length; i++) {
        missingNum += i - nums[i];
    }
    return missingNum;
}