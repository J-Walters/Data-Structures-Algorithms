/* 
Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input arrray sum up to the target sum, the function should return them in an array , in any order.
If no two numbers sum up to the target sum, the function shold return an empty array.

Note that the target sum has to be obtained by summing two different integers in the array; you can't add a single integer to itself in order to obtain the target sum.

You can assume that there will be at most one pair of number summing up to the targer sum.

-----------------------
input
array = [ 3, 5, -4, 8, 11, 1, -1, 6]
targetSum = 10

output
[-1, 11]
*/

//O(n) time | O(n) space
function twoNumberSum(array, targetSum) {
    const result = []
      for(let i = 0; i < array.length; i++) {
          for(let j = i + 1; j < array.length; j++ ) {
              if(array[i] + array[j] === targetSum) {
                  result.push(array[i], array[j])
              }
          }
      }
      return result
  }


//O(n) time | O(n) space
function twoNumberSum(array, targetSum) {
    const nums = {}
    for (const num of array) {
        const potentialMatch = targetSume - num;
        if (potentialMatch in nums) {
            return [potentialMatch, num]
        } else {
            nums[num] = true
        }
    }
    return [];
}

//O(nlog(n)) | O(1) space
function twoNumberSum(array, targetSum) {
    array.sort((a, b) => a - b)
    let left = 0
    let right = array.length - 1
    while(left < right) {
        const currentSum = array[left] + array[right]
        if(currentSum === targetSum) {
            return [array[left], array[right]]
        } else if (currentSum < targetSum) {
            left++
        } else if (currentSum > targetSum) {
            right--
        }
    }
    return [];
}