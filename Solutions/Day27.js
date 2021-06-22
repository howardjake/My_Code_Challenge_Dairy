// IP Validation

// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

// Input to the function is guaranteed to be a single string.

// Examples
// Valid inputs:

// 1.2.3.4
// 123.45.67.89
// Invalid inputs:

// 1.2.3
// 1.2.3.4.5
// 123.456.78.90
// 123.045.067.089

function isValidIP(str) {
    let apt = str.split('.')
    let x = 0
    if (apt.length === 4) {
        apt.forEach((item)=>{
            if(parseInt(item).toString() == item && parseInt(item) >= 0 && parseInt(item) < 256) {
                x++;
            }
        })
        if (x === 4) {
            return true
        } else { 
            return false
        }
    } else {
        return false;
    }
}
