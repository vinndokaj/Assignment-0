function frequencyCounter(word) {
  // Insert code here;
  letters = {};
  for(var i = 0; i < word.length; i++){
    letter = word[i];
    if(letter in letters){
      letters[letter] += letters[letter]
    } else {
      letters[letter] = 1
    }
  }
  return letters;
}

// Do not edit this line;
module.exports = frequencyCounter;
