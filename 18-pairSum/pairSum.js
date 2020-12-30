function pairSum(nums, target) {
  // Insert code here;
  if(nums.length < 2){
    throw(error);
  }
  for(var i = 0; i < nums.length; i++){
    for(var j = i; j < nums.length; j ++){
      sum = nums[i] + nums[j];
      if(sum == target){
        return true;
      }
    }
  }
  return false;
}

// Do not edit this line;
module.exports = pairSum;
