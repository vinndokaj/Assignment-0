function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  var mySet = new Set();
  for(var i = 0; i < args.length; i++){
    args[i].forEach((item, i) => {
      if(!mySet.has(item)){
        mySet.add(item);
      }
    });
  }
  return mySet;

}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
