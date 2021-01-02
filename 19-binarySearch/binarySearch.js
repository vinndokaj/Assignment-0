class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // Insert code here;
    var i = Math.floor(nums.length/2);
    var middle = nums[i];
    if(middle == target){
      return true;
    } else if (nums.length == 1){
      return false;
    } else if (middle < target){
      return this.binarySearch(nums.slice(i), target);
    } else if (middle > target){
      return this.binarySearch(nums.slice(0, i), target);
    }
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
