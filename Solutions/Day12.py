# Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

# Examples:
# a = "xyaabbbccccdefww"
# b = "xxxxyyyyabklmopq"
# longest(a, b) -> "abcdefklmopqwxy"

# a = "abcdefghijklmnopqrstuvwxyz"
# longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

def longest(a1, a2):
  lA1 = list(a1)
  lA2 = list(a2)
  for letter in lA2:
    lA1.append(letter)
  lA1.sort()
  i = 0
  while i < len(lA1):
    if lA1[i] == lA1[i - 1]:
      lA1.pop(i)
      i = 0
    i+= 1
  return ''.join(lA1)