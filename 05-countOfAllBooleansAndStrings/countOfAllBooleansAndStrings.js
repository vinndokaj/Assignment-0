function countOfAllBooleansAndStrings(arr) {
  // Insert code here;
  count = 0;
  for(var i = 0; i < arr.length; i++){
    type = typeof(arr[i]);
    if(type == 'boolean' || type == 'string'){
      count++;
    }
  }
  return count;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;
