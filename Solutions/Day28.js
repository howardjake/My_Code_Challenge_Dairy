// Human Readable Time

// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

function humanReadable(seconds) {
    let hours = 00;
    let minutes = 00;
    while (seconds > 3599) {
        hours += 1
        seconds -= 3600
    }
    while (seconds > 59) {
        minutes += 1
        seconds -= 60
    }
    return `${hours.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      })}:${minutes.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      })}:${seconds.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      })}`
}


console.log(humanReadable(86399))
console.log(humanReadable(60))