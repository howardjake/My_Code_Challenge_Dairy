// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

function digital_root(n) {
    let number = n;
    function addDigits(input) {
      let list = number.toString();
      let allNums = [];
      let sum = 0;
      for (let i = 0; i < list.length; i++) {
        allNums.push(parseInt(list[i]));
      }
      allNums.forEach(item => {
        sum += item;
      })
      number = sum;
    }
    addDigits(number);
    if (number > 9) {
      addDigits(number);
    }
    return number;
  }