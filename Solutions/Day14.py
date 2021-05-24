# Split Strings

# Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

# Examples:

# solution('abc') # should return ['ab', 'c_']
# solution('abcdef') # should return ['ab', 'cd', 'ef']

def solution(s):
  cuts = []
  i = 0
  if len(s) % 2 != 0:
    s = s + "_"
  while i < len(s):
    if i % 2 == 0:
      cuts.append(s[i:i+2])
    i = i + 1
  return cuts