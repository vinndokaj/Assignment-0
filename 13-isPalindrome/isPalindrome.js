function isPalindrome(word) {
  // Insert code here;
  front = 0;
  end = word.length - 1;
  while (front <= end){
    t1 = word[front];
    t2 = word[end];
    if(t1 != t2){
      return false
    }
    front += 1;
    end -= 1;
  }
  return true;
}

// Do not edit this line;
module.exports = isPalindrome;
