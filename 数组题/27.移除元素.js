/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// 解法一：左右双指针
var removeElement = function (nums, val) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    if (nums[end] === val) {
      end--;
    } else {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
    }
  }
  return start;
};

// 解法二：快慢双指针
var removeElement_2 = function (nums, val) {
  let slow = 0;
  let fast = 0;
  while (fast < nums.length) {
    if (nums[fast] !== val) {
      nums[slow] = nums[fast];
      slow++;
    }
    fast++;
  }
  return slow;
};

// 这道题的关键点就是保证 0 ~ slow-1是符合条件，即不包含val的值
