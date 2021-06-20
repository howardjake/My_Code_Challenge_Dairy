// Roman Numerals Decoder

// Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

// Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

// Example:

// solution('XXI'); // should return 21

function solution(roman){
    let list = roman.split('')
    list.forEach((item, idx) => {
      if (item === 'M') { list[idx] = 1000}
      if (item === 'D') { list[idx] = 500}
      if (item === 'C') { list[idx] = 100}
      if (item === 'L') { list[idx] = 50}
      if (item === 'X') { list[idx] = 10}
      if (item === 'V') { list[idx] = 5}
      if (item === 'I') { list[idx] = 1}
    })
    for (let i = 0; i< list.length; i++) {
      if (list[i] < list[i + 1]) {
        list[i] = -list[i]
      }
    }
    const reducer = (sum, val) => sum + val;
    return list.reduce(reducer)
  }