# Rot13

# ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

# Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

# Please note that using encode is considered cheating.

alph = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLOMNPQRSTUVWXYZ'
low = 'abcdefghijklmnopqrstuvwxyz'
upper = 'ABCDEFGHIJKLOMNPQRSTUVWXYZ'

def rot13(message):
    new = []
    for x in message:
        if alph.index(x) > 25:
            key = upper
        if alph.index(x) <= 25:
            key = low
        amount = (key.index(x)) + 13
        if amount > 26:
            amount = amount - 26
        new.append(key[amount])
        space = ''
    return space.join(new)

print(rot13("Codewars"))

    


