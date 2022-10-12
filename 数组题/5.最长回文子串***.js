/**
 * @param {string} s
 * @return {string}
 */
// 回文串 => 从中心扩展的双指针
const findMaxStr = (s, leftIdx, rightIdx) => {
  while (leftIdx >= 0 && rightIdx < s.length) {
    if (s[leftIdx] !== s[rightIdx]) break;
    leftIdx--;
    rightIdx++;
  }
  return s.slice(leftIdx + 1, rightIdx);
};
var longestPalindrome = function (s) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    const s1 = findMaxStr(s, i, i); // 奇数
    const s2 = findMaxStr(s, i, i + 1); // 偶数
    result = result.length > s1.length ? result : s1;
    result = result.length > s2.length ? result : s2;
  }
  return result;
};

// 笔记：解决该问题的核心是从中心向两端扩散的双指针技巧，找到以每个或每两个数据组元素为中心的最大回文串
// 找回文串的难点在于，回文串的的长度可能是奇数也可能是偶数，
// 如果回文串的长度为奇数，则它有一个中心字符；如果回文串的长度为偶数，则可以认为它有两个中心字符。

// for 0 <= i < len(s):
//     找到以 s[i] 为中心的回文串
//     找到以 s[i] 和 s[i+1] 为中心的回文串
//     更新答案
