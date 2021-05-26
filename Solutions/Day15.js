// Mumbling

// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(s) {
	let mumble = []
  for (let i = 0; i < s.length; i++) {
    mumble.push(s[i].toUpperCase() + s[i].toLowerCase().repeat(i))
  }
  return mumble.join('-')
}