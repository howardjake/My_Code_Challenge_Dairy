# Permutations

# Description:
# In this kata you have to create all permutations of an input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

# Examples:

# permutations('a'); # ['a']
# permutations('ab'); # ['ab', 'ba']
# permutations('aabb'); # ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
# The order of the permutations doesn't matter.

def permutations(string):
    def branch(string):
        split = []
        split[:0]=string
        if len(split) == 0:
            return []
        if  len(split) == 1:
            return [split]

        l = []
        for i in range(len(split)):
            m = split[i]

            leftNum = split[:i] + split[i+1:]

            for p in branch(leftNum):
                l.append([m] + p)
        answer = []
        return l
    answer = []
    for x in branch(string):
        if "".join(x) not in answer:
            answer.append("".join(x))
    return answer
