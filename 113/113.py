# %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
# Daily Coding Problem #113

# Given a string of words delimited by spaces, reverse the words in string. 
# For example, given "hello world here", return "here world hello"

import array

def reverse(word):
    new_array = word.split(" ")[::-1]
    return str(new_array)

word = "Hello world here"
print("Word: " + word)
print("Reverse: " + reverse(word))