// Assignment 5: Algorithm Practice (Advanced Optional)
// Given an array of integers, return indices of the two numbers such that they add up to a
// specific target. You may assume that each input would have exactly one solution, and you
// may not use the same element twice.



function twoSum(nums, target){

    for ( let i = 0; i < nums.length-1; i++){
        for ( let x = i+1 ; x < nums.length; x++ ){
            if( nums[i] + nums[x] === target ){
                return `[${i}, ${x}]`;
            }
        }
    }
}
/*
For example:
twoSum([2, 7, 11, 15], 9);
Should returns:
[0, 1]
Because:
nums[0]+nums[1] is 9
*/

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3,6,36,8,9,10],19)); // [4, 5]