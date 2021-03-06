// Find all possible combinations of k numbers that add up to a number n, given that only numbers from 1 to 9 can be used and 
// each combination should be a unique set of numbers.

// Note:

// All numbers will be positive integers.
// The solution set must not contain duplicate combinations.
// Example 1:

// Input: k = 3, n = 7
// Output: [[1,2,4]]
// Example 2:

// Input: k = 3, n = 9
// Output: [[1,2,6], [1,3,5], [2,3,4]]

var combinationSum3 = function(k, n) {
    let all = [];
    const recurse = (left, src, curr, all) => {
        if (left === 0 && curr.length === k && curr.reduce((acc, num) => acc + num) === n) {
            all.push(curr);
        }
        else {
            for (var i = 0 ; i < src.length; i++) {
                recurse(left-1, src.slice(i+1), curr.concat(src[i]), all);
            }
        }
        return;
    }
    recurse(k, [1,2,3,4,5,6,7,8,9], [], all);
    return all;
};