/*
Write a function that takes in a non-empty array of integers
that are sorted in ascending order and returns a new array
of the same length with the squares of the original integers
also sorted in ascending order.

------------------------
sample input 
array = [1, 2, 3, 5, 6, 8, 9]

sample output
[1, 4, 9, 25, 36, 64, 81]

-------------------------
edge cases
does it contain negative integers?
*/


function sortedSquaredArray(array) {
    const result = []
      for(let i = 0; i < array.length; i++) {
          const value = array[i]
          result.push((value * value))
      }
      return result.sort((a, b) => a - b)
  }

  function sortedSquaredArray(array) {
    return array.map(x => x * x).sort((a,b) => a-b)
  }
 