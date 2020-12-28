function titleCaseEdit(title) {
  // Insert code here;
  all_words = title.split(" ");
  for(var i = 0; i < all_words.length; i++){
    all_words[i] = capitalizeFirstLetter(all_words[i]);
  }
  newTitle = all_words.join(" ");
  return newTitle;
}

function capitalizeFirstLetter(word) {
  firstLetter = word.substr(0,1).toUpperCase();
  restOfWord = word.substr(1);
  str = firstLetter + restOfWord;
  return str;
}

// Do not edit this line;
module.exports = titleCaseEdit;
