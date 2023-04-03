// Complete the function that

// accepts two integer arrays of equal length
// compares the value each member in one array to the corresponding member in the other
// squares the absolute value difference between those two values
// and returns the average of those squared absolute value difference between each member pair.

var solution = function(firstArray, secondArray) {
    return firstArray.map(function (k, i) {
      return (k - secondArray[i])**2}).reduce((a, b) => a + b) / firstArray.length;
}