# This is my coding challenge diary

## As a coder it can be easy to fall into the same old tricks but having a daily practice can make you more flexible and smarter.  If you can code everyday you are bound to become a master. Follow the daily challenges I am trying each day here. Feel free to copy this README and do them with me. 
## I will be tracking my coding challenge solutions here day by day. Obiviously there are many ways to solve these challenges, so don't just accept my solutions as the best solution. If you have better solution I'd love to know. 
## My email is howardjake9512@gmail.com
(https://www.freecodecamp.org/ is my main source but I may branch out if need be) 

![code cat](./img/codecat.gif)

# Day 1 (FreeCodeCamp)

// 100 doors

There are 100 doors in a row that are all initially closed. You make 100 passes by the doors. The first time through, visit every door and 'toggle' the door (if the door is closed, open it; if it is open, close it). The second time, only visit every 2nd door (i.e., door #2, #4, #6, ...) and toggle it. The third time, visit every 3rd door (i.e., door #3, #6, #9, ...), etc., until you only visit the 100th door.

Implement a function to determine the state of the doors after the last pass. Return the final result in an array, with only the door number included in the array if it is open.

Expected ouput at 100 doors.
```
[ 1, 4, 9, 16, 25, 36, 49, 64, 81, 100 ]
```
Language I used: (Javascript)
# Day 2 (FreeCodeCamp)

// Find the Symmetric Difference

The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time. Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates).

![Day2Exepected](./img/Day2Expectations.PNG)

Language I used: (Javascript)
# Day 3 (Codewars)

// Sum of Digits / Digital Root 

Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.


Example:
```
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
```

Language I used: (Javascript)
# Day 4 (FreeCodeCamp)

// Pairwise

Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

You may use multiple pairs that have the same numeric elements but different indices. Each pair should use the lowest possible available indices. Once an element has been used it cannot be reused to pair with another element. For instance, pairwise([1, 1, 2], 3) creates a pair [2, 1] using the 1 at index 0 rather than the 1 at index 1, because 0+2 < 1+2.

For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.

### Index	0	1	2	3	4
### Value	7	9	11	13	15
### Below we'll take their corresponding indices and add them.
Expected output
### 7 + 13 = 20 → Indices 0 + 3 = 3
### 9 + 11 = 20 → Indices 1 + 2 = 3
### 3 + 3 = 6 → Return 6
### pairwise([1, 4, 2, 3, 0, 5], 7) should return 11.
### pairwise([1, 3, 2, 4], 4) should return 1.
### pairwise([1, 1, 1], 2) should return 1.
### pairwise([0, 0, 0, 0, 1, 1], 1) should return 10.
### pairwise([], 100) should return 0.

Language I used: (Javascript)

# Day 5 (FreeCodeCamp / Algorithms)

// Implement Bubble SortPassed

This is the first of several challenges on sorting algorithms. Given an array of unsorted items, we want to be able to return a sorted array. We will see several different methods to do this and learn some tradeoffs between these different approaches. While most modern languages have built-in sorting methods for operations like this, it is still important to understand some of the common basic approaches and learn how they can be implemented.

 Here we will see bubble sort. The bubble sort method starts at the beginning of an unsorted array and 'bubbles up' unsorted values towards the end, iterating through the array until it is completely sorted. It does this by comparing adjacent items and swapping them if they are out of order. The method continues looping through the array until no swaps occur at which point the array is sorted.

This method requires multiple iterations through the array and for average and worst cases has quadratic time complexity. While simple, it is usually impractical in most situations.

Instructions: Write a function bubbleSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.

### Starter Code
```
function bubbleSort(array) {
  // Only change code below this line
  return array;
  // Only change code above this line
}

bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
```
Language I used: (Javascript)
### Expected Output
```

[ 1, 1, 2, 2, 4, 8, 32, 43, 43, 55, 63, 92, 123, 123, 234, 345, 5643 ]
```
# Day 6 (CodeWars via [jacobb](https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript))
// Jaden Casing Strings

![Jaden-hame-ha](https://media.giphy.com/media/YlInaCVFhV5ekunFwW/giphy.gif)

Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

[Link to Jaden's former Twitter account @officialjaden via archive.org](https://web.archive.org/web/20190624190255/https://twitter.com/officialjaden)

### Example:
```
Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
```
Language I used: (Javascript)

# Day 7 (CodeWars via [kwy95](https://www.codewars.com/kata/544aed4c4a30184e960010f4/train/javascript))

// Find the divisors!

Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

Example:
```
divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
divisors(13); // should return "13 is prime"
```

Language I used: (Javascript)

# Day 8 (FreeCodeCamp / Algorithms)

// Implement Selection Sort

Here we will implement selection sort. Selection sort works by selecting the minimum value in a list and swapping it with the first value in the list. It then starts at the second position, selects the smallest value in the remaining list, and swaps it with the second element. It continues iterating through the list and swapping elements until it reaches the end of the list. Now the list is sorted. Selection sort has quadratic time complexity in all cases.

Instructions: Write a function selectionSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.
```
selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92])

Should come out to 
-> [ 1, 1, 2, 2, 4, 8, 32, 43, 43, 55, 63, 92, 123, 123, 234, 345, 5643 ]

```
Language I used: (Javascript)

# Day 9 (FreeCodeCamp / Algorithms)

// Implement Quick Sort

Here we will move on to an intermediate sorting algorithm: quick sort. Quick sort is an efficient, recursive divide-and-conquer approach to sorting an array. In this method, a pivot value is chosen in the original array. The array is then partitioned into two subarrays of values less than and greater than the pivot value. We then combine the result of recursively calling the quick sort algorithm on both sub-arrays. This continues until the base case of an empty or single-item array is reached, which we return. The unwinding of the recursive calls return us the sorted array.

Quick sort is a very efficient sorting method, providing O(nlog(n)) performance on average. It is also relatively easy to implement. These attributes make it a popular and useful sorting method.

Instructions: Write a function quickSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest. While the choice of the pivot value is important, any pivot will do for our purposes here. For simplicity, the first or last element could be used.

```
QuickSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92])

Should come out to 
-> [ 1, 1, 2, 2, 4, 8, 32, 43, 43, 55, 63, 92, 123, 123, 234, 345, 5643 ]

```
Language I used: (Javascript)

# Day 10 (CodeWars via [xDranik](https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/ruby))

// Create Phone Number

Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
```
Example:
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) # => returns "(123) 456-7890"
```
Language I used: (Ruby)

# Day 11 (CodeWars via [Aweson1](https://www.codewars.com/kata/55b42574ff091733d900002f/train/python))

// Friend or Foe?

Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.
``` 
friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
``` 
Note: keep the original order of the names in the output.

Language I used: (Python)

# Day 12 (CodeWars via [g964](https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/python))

// Two to One

Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
```
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
```

Language I used: (Python)

# Day 13 (CodeWars via [cmgerber](https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript))

// List Filtering

In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
```
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
```
Language I used: (Javascript)

# Day 14 (CodeWars via [jhoffner](https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/python))

// Split Strings

Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:
```
solution('abc') # should return ['ab', 'c_']
solution('abcdef') # should return ['ab', 'cd', 'ef']
```
Language I used: (Python)

# Day 15 (CodeWars via [g964](https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript))

// Mumbling

This time no story, no theory. The examples below show you how to write function accum:

Examples:

```
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
```
Language I used: (Javascript)

# Day 16 (CodeWars via [kphurley](https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/python))

// Find the next perfect square!

You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:
```
findNextSquare(121) --> returns 144
findNextSquare(625) --> returns 676
findNextSquare(114) --> returns -1 since 114 is not a perfect square
```
Language I used: (Python)

# Day 17 (CodeWars via [g964](https://www.codewars.com/kata/56541980fa08ab47a0000040/train/python))

// Printer Errors

In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.

Examples:
```
s="aaabbbbhaijjjm"
error_printer(s) => "0/14"

s="aaaxbbbbyyhwawiwif (input.length)
Strings passed in will consist of only letters and spaces.
Spaces will be included only when more than one word is present.
```
Examples:
```
spinWords("Hey fellow warriors") => "Hey wollef sroirraw" 
spinWords("This is a test") => "This is a test" 
spinWords("This is another test") => "This is rehtona test"
```
Language I used: (Javascript)

# Day 19 ((CosdeWars via [kgashok](https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript)))

// Count the number of Duplicates

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
```
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
```

# Day 20 (CodeWars via [raulbc777](https://www.codewars.com/kata/5626b561280a42ecc50000d1/train/javascript))

// Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!

The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.

In effect: 89 = 8^1 + 9^2

The next number in having this property is 135.

See this property again: 135 = 1^1 + 3^2 + 5^3

We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

Let's see some cases:
```
sumDigPow(1, 10) == [1, 2, 3, 4, 5, 6, 7, 8, 9]

sumDigPow(1, 100) == [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
```
If there are no numbers of this kind in the range [a, b] the function should output an empty list.
```
sumDigPow(90, 100) == []
```
Language I used: (Javascript)
# Day 21 (CodeWars via [St3f4n](https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript))

// Count the smiley faces!

Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]

Example
```
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([]', ':[', ';*', ':$', ';-D']); // should return 1;
```
Note
In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.

Language I used: (Javascript)

# Day 22 ([FreeCodeCamp](https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-stack-class))

// Create a Stack Class

In the last section, we talked about what a stack is and how we can use an array to represent a stack. In this section, we will be creating our own stack class. Although you can use arrays to create stacks, sometimes it is best to limit the amount of control we have with our stacks. Apart from the push and pop method, stacks have other useful methods. Let's add a peek, isEmpty, and clear method to our stack class.

Write a push method that pushes an element to the top of the stack, a pop method that removes and returns the element on the top of the stack, a peek method that looks at the top element in the stack, an isEmpty method that checks if the stack is empty, and a clear method that removes all elements from the stack. Normally stacks don't have this, but we've added a print helper method that console logs the collection.

Language I used: (Javascript)

# Day 23 ([FreeCodeCamp](https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-queue-class))

// Create a Queue Class

Like stacks, queues are a collection of elements. But unlike stacks, queues follow the FIFO (First-In First-Out) principle. Elements added to a queue are pushed to the tail, or the end, of the queue, and only the element at the front of the queue is allowed to be removed.

We could use an array to represent a queue, but just like stacks, we want to limit the amount of control we have over our queues.

The two main methods of a queue class is the enqueue and the dequeue method. The enqueue method pushes an element to the tail of the queue, and the dequeue method removes and returns the element at the front of the queue. Other useful methods are the front, size, and isEmpty methods.

Write an enqueue method that pushes an element to the tail of the queue, a dequeue method that removes and returns the front element, a front method that lets us see the front element, a size method that shows the length, and an isEmpty method to check if the queue is empty.

Language I used: (Javascript)

# Day 24 (CodeWars via [jhoffner](https://www.codewars.com/kata/51b6249c4612257ac0000005/train/javascript))

// Roman Numerals Decoder

Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

Example:
```  
solution('XXI'); // should return 21
```
Language I used: (Javascript)
# Day 25 (CodeWars via [user5036852](https://www.codewars.com/kata/57814d79a56c88e3e0000786/train/javascript))

// Simple Encryption #1 - Alternating Split

For building the encrypted string:
Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String.
Do this n times!

Examples:
```
"This is a test!", 1 -> "hsi  etTi sats!"
"This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"
```
Write two methods:
```
function encrypt(text, n)
function decrypt(encryptedText, n)
```
For both methods:
If the input-string is null or empty return exactly this value!
If n is <= 0 then return the input text.

Language I used: (Javascript)

# Day 26 (CodeWars via [user5036852](https://www.codewars.com/kata/5782b5ad202c0ef42f0012cb/train/javascript))

// Simple Encryption #2 - Index-Difference

For encrypting strings this region of chars is given (in this order!):

all letters (ascending, first all UpperCase, then all LowerCase)
all digits (ascending)
the following chars: .,:;-?! '()$%&"
These are 77 chars! (This region is zero-based.)

Write two methods:
```
function encrypt(text)
function decrypt(encryptedText)
```
Prechecks:

If the input-string has chars, that are not in the region, throw an Exception(C#, Python) or Error(JavaScript).
If the input-string is null or empty return exactly this value!
For building the encrypted string:

For every second char do a switch of the case.
For every char take the index from the region. Take the difference from the region-index of the char before (from the input text! Not from the fresh encrypted char before!). (Char2 = Char1-Char2)
Replace the original char by the char of the difference-value from the region. In this step the first letter of the text is unchanged.
Replace the first char by the mirror in the given region. ('A' -> '"', 'B' -> '&', ...)
Simple example:

Input: "Business"
Step 1: "BUsInEsS"
Step 2: "B61kujla"
B -> U
B (1) - U (20) = -19
-19 + 77 = 58
Region[58] = "6"
U -> s
U (20) - s (44) = -24
-24 + 77 = 53
Region[53] = "1"
Step 3: "&61kujla"

Language I used: (Javascript)

# Day 27 (CodeWars via [wink](https://www.codewars.com/kata/515decfd9dcfc23bb6000006/train/javascript))

// IP Validation

Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

Input to the function is guaranteed to be a single string.

Examples
Valid inputs:
```
1.2.3.4
123.45.67.89
```
Invalid inputs:
```
1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089
```

Language I used: (Javascript)

# Day 28 (CodeWars via [BattleRattle](https://www.codewars.com/kata/52685f7382004e774f0001f7/solutions/javascript))

// Human Readable Time

Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

Language I used: (Javascript)
# Day 29 (CodeWars via [xcthulhu](https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/python))

// Moving Zeros To The End

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

```
move_zeros([1, 0, 1, 2, 0, 1, 3]) # returns [1, 1, 2, 1, 3, 0, 0]
```

Language I used: (Python)

# Day 30 (CodeWars via [Rubikan](https://www.codewars.com/kata/530e15517bc88ac656000716/train/python))

Rot13

ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

Please note that using encode is considered cheating.

Language I used: (Python)

# Day 31 (CodeWars via [knotman90](https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/python))

// Maximum subarray sum

The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:
```
max_sequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
# should be 6: [4, -1, 2, 1]
```
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

Language I used: (Python)

# Day 32 (CodeWars via []())

// Which are In?

Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

Example 1:
a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

Example 2:
a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []

Notes:
Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
Beware: r must be without duplicates.