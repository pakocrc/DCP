// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
/// Daily Coding Problem #113

/// Given a string of words delimited by spaces, reverse the words in string. 
/// For example, given "hello world here", return "here world hello"

function reverse(word) {
    return word.split(" ").reverse()
}

let word = "Hello world here"
console.log("Word: " + word)
console.log("Reversed: " + reverse(word))