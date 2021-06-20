// Simple Encryption #2 - Index-Difference

// For encrypting strings this region of chars is given (in this order!):

// all letters (ascending, first all UpperCase, then all LowerCase)
// all digits (ascending)
// the following chars: .,:;-?! '()$%&"
// These are 77 chars! (This region is zero-based.)

// Write two methods:

// function encrypt(text)
// function decrypt(encryptedText)
// Prechecks:

// If the input-string has chars, that are not in the region, throw an Exception(C#, Python) or Error(JavaScript).
// If the input-string is null or empty return exactly this value!
// For building the encrypted string:

// For every second char do a switch of the case.
// For every char take the index from the region. Take the difference from the region-index of the char before (from the input text! Not from the fresh encrypted char before!). (Char2 = Char1-Char2)
// Replace the original char by the char of the difference-value from the region. In this step the first letter of the text is unchanged.
// Replace the first char by the mirror in the given region. ('A' -> '"', 'B' -> '&', ...)
// Simple example:

// Input: "Business"
// Step 1: "BUsInEsS"
// Step 2: "B61kujla"
// B -> U
// B (1) - U (20) = -19
// -19 + 77 = 58
// Region[58] = "6"
// U -> s
// U (20) - s (44) = -24
// -24 + 77 = 53
// Region[53] = "1"
// Step 3: "&61kujla"

const region = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,:;-?! '()$%&"`.split('')

function encrypt(text) {
   if(text) {
        let original = text.split('')
        let apart = text.split('')
        apart.forEach((item, idx)=>{
            if ((idx -1) % 2 == 0) {
                if (region.indexOf(item) > 25 && region.indexOf(item) < 51) {
                    apart[idx] = apart[idx].toUpperCase()
                    original[idx] = original[idx].toUpperCase()
                }
                if (region.indexOf(item) <= 25) {
                    apart[idx] = apart[idx].toLowerCase()
                    original[idx] = original[idx].toLowerCase()
                }
            }
        })
        for (let i = 1; i < apart.length; i++) {
            let diff;
            let swap;
            diff = region.indexOf(original[i - 1]) - region.indexOf(original[i])
            if (diff < 0) {
                swap = diff + 77
            } else {
                swap = diff
            }
            apart[i] = region[swap]
        }
        apart[0] = region[76 - region.indexOf(apart[0])]
        return apart.join('')
    } else {
        return text
    }
}

function decrypt(encryptedText) {
    if (encryptedText) {
        let apart = encryptedText.split('')
        apart[0] = region[76 - region.indexOf(apart[0])]
        for (let i = 1; i < apart.length; i++) {
            let diff = (-2 * ((region.indexOf(apart[i]) - 77) - region.indexOf(apart[i -1])))/2
            if (diff >= 77) {
                diff = diff - 77
            }
            apart[i] = region[diff]
        }
        apart.forEach((item, idx)=>{
            if ((idx -1) % 2 == 0) {
                if (region.indexOf(item) > 25 && region.indexOf(item) < 52) {
                    apart[idx] = apart[idx].toUpperCase()
                }
                if (region.indexOf(item) <= 25) {
                    apart[idx] = apart[idx].toLowerCase()
                }
            }
        })
        return apart.join('')
    } else {
        return encryptedText
    }
}
