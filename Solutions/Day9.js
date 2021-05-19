// Implement Quick Sort

// Here we will move on to an intermediate sorting algorithm: quick sort. Quick sort is an efficient, recursive divide-and-conquer approach to sorting an array. In this method, a pivot value is chosen in the original array. The array is then partitioned into two subarrays of values less than and greater than the pivot value. We then combine the result of recursively calling the quick sort algorithm on both sub-arrays. This continues until the base case of an empty or single-item array is reached, which we return. The unwinding of the recursive calls return us the sorted array.

// Quick sort is a very efficient sorting method, providing O(nlog(n)) performance on average. It is also relatively easy to implement. These attributes make it a popular and useful sorting method.

// Instructions: Write a function quickSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest. While the choice of the pivot value is important, any pivot will do for our purposes here. For simplicity, the first or last element could be used.


// quickSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92])

// Should come out to 
// -> [ 1, 1, 2, 2, 4, 8, 32, 43, 43, 55, 63, 92, 123, 123, 234, 345, 5643 ]

function quickSort(array) {
    function sort(arr) {
      let solution = arr
      arr.forEach((item, idx) => {
        let pivot = item[Math.floor(Math.random() * item.length)]
        let less = [];
        let equal = [];
        let more = [];
        for (let i = 0; i < item.length; i++) {
          if (item[i] > pivot) {
            more.push(item[i])
          } else if (item[i] < pivot) {
            less.push(item[i])
          } else if (item[i] = pivot){
            equal.push(pivot)
          }
        }
        solution.splice(idx, 1)
        if (more[0] !== undefined) {solution.splice(idx, 0, more)}
        if (equal[0] !== undefined) {solution.splice(idx, 0, equal)}
        if (less[0] !== undefined) {solution.splice(idx, 0, less)}
      })
      return solution;
    }
    let ordered = sort([array]);
    for (let i = 0; i < ordered.length; i++) {
      let current = ordered[i]
      for (let x = 0; x < ordered.length; x++) {
        if (current[x] != current[x + 1]) {
          sort(ordered)
          break
        }
      }
    }
    return ordered.flat();
  }
