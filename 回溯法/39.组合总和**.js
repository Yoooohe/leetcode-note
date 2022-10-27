/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let result = [];
  const backtrack = (track, start, target) => {
    if (target === 0) {
      result.push(track.slice());
      return;
    }
    if (target < 0) return;
    for (let i = start; i < candidates.length; i++) {
      const curNum = candidates[i];
      track.push(curNum);
      backtrack(track, i, target - curNum); // 关键
      track.pop();
    }
  };
  backtrack([], 0, target);
  return result;
};

// 标准的子集/组合问题是如何保证不重复使用元素的？
// 答案在于 backtrack 递归时输入的参数 start
// 这个 i 从 start 开始，那么下一层回溯树就是从 start + 1 开始，
// 从而保证 nums[start] 这个元素不会被重复使用
// 那么反过来，如果我想让每个元素被重复使用，我只要把 i + 1 改成 i 即可
