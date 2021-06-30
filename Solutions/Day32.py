# Which are In?

# Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

# Example 1:
# a1 = ["arp", "live", "strong"]

# a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

# returns ["arp", "live", "strong"]

# Example 2:
# a1 = ["tarp", "mice", "bull"]

# a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

# returns []

# Notes:
# Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
# In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
# Beware: r must be without duplicates.

def in_array(array1, array2):
    r = ['']
    array1.sort()
    for word in array1:
        for word2 in array2:
            i = 0
            while i < len(word2):
                if word2[i] == word[0]:
                    if word2[i:i+len(word)] == word:
                            [r.append(word) for n in r if word not in r]
                i += 1
    return r[1:]

