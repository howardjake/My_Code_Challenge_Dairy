# RGB To Hex Conversion

# The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

# Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

# The following are examples of expected output values:

# rgb(255, 255, 255) # returns FFFFFF
# rgb(255, 255, 300) # returns FFFFFF
# rgb(0,0,0) # returns 000000
# rgb(148, 0, 211) # returns 9400D3

def rgb(r, g, b):
    legend = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
    hex = []
    for x in [r, g, b]:
        if x >= 0 and x < 256:
            hex.append(legend[int(x/16)])
            hex.append(legend[int(((x/16) - int(x/16)) * 16)])
        elif x > 255: 
            hex.append("F")
            hex.append("F")
        else: 
            hex.append("0")
            hex.append("0")
    return "".join(hex)
