/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  let result = [];
  let used = [];
  const backtrack = (track) => {
    if (track.length === nums.length) {
      result.push(track.slice());
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      // 关键点：剪枝逻辑
      if (used[i]) continue;
      if (i > 0 && nums[i] === nums[i - 1] && used[i - 1]) continue;
      track.push(nums[i]);
      used[i] = true;
      backtrack(track);
      track.pop();
      used[i] = false;
    }
  };
  nums.sort();
  backtrack([]);
  return result;
};
