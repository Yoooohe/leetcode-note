/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let slow = 0;
  let fast = 0;
  while (fast < nums.length) {
    if (nums[slow] !== nums[fast]) {
      slow++;
      [nums[fast], nums[slow]] = [nums[slow], nums[fast]];
    }
    fast++;
  }
  return slow + 1;
};

// 笔记：高效解决这道题就要用到快慢指针技巧：
// 我们让慢指针 slow 走在后面，快指针 fast 走在前面探路，找到一个不重复的元素就赋值给 slow 并让 slow 前进一步。
// 这样，就保证了 nums[0..slow] 都是无重复的元素，当 fast 指针遍历完整个数组 nums 后，nums[0..slow] 就是整个数组去重之后的结果。
// 有一道和它非常相似的链表题目：83
