/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  let res = [];
  const len = nums.length;
  // 先排序，让相同的元素靠在一起
  nums.sort();
  const backtrack = (start, track) => {
    res.push(track.slice());
    for (let i = start; i < len; i++) {
      // 剪枝逻辑，值相同的相邻树枝，只遍历第一条
      if (i > start && nums[i] === nums[i - 1]) continue;
      track.push(nums[i]);
      backtrack(i + 1, track);
      track.pop();
    }
  };
  backtrack(0, []);
  return res;
};
