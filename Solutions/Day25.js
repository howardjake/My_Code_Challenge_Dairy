// Simple Encryption #1 - Alternating Split

// For building the encrypted string:
// Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String.
// Do this n times!

// Examples:

// "This is a test!", 1 -> "hsi  etTi sats!"
// "This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"
// Write two methods:

// function encrypt(text, n)
// function decrypt(encryptedText, n)
// For both methods:
// If the input-string is null or empty return exactly this value!
// If n is <= 0 then return the input text.

function encrypt(text, n) {
    if (text) {
      let apart = text.split('');
      let front = [];
      let back = [];
      let i = 0;
      while (i < n) {
        apart.forEach((item, idx)=>{
          if ((idx + 1) % 2 == 0) {
            front.push(item);
          } else {
            back.push(item);
          }
        })
        apart = [...front, ...back];
        front = [];
        back = [];
        i++;
      }
      return apart.join('')
    } else {
      return text
    }
  }
  
  function decrypt(encryptedText, n) {
    if (encryptedText) {
      let apart = encryptedText.split('')
      let evens = []
      let odds = []
      let together = []
      let i = 0
      while (i < n) {
        odds = apart.slice(Math.floor((apart.length / 2)), apart.length)
        evens = apart.slice(0, Math.floor((apart.length / 2)))
        for (let l = 0; l < odds.length; l++) {
          together.push(odds[l])
          if (evens[l]){together.push(evens[l])}
        }
        apart = together
        evens = []
        odds = []
        together = []
        i++;
    }
      return apart.join('')
    } else {
      return encryptedText
    }
  }