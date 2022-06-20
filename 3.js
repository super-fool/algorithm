/**
 * 一. 无重复字符的最长子串
 * 1. 如何判断子串无重复？
 *      indexOf(i) === -1
 * 2. 判断最长？
 *      使用 Math.max(a, b)
 *
 * 1. 滑动窗口：只要计算最大长度， 最小长度时， 使用滑动窗口。
 */

var lengthOfLongestSubstring = function (str) {
  if (str.length <= 1) {return str.length}
  let length = str.length;
  let l = 0;
  let r = 1;
  let ans = 0;
  let arr = [];
  while (r < length) {
    let i = str.charAt(r); // 是否重复的的子项
    arr = str.slice(l, r);
    if (arr.indexOf(i) !== -1) {
      l++;
      continue;
    } else {
      r++;
    }
    ans = Math.max(ans, r - l);
  }

  return ans;
};

let testArr = "au";

const res = lengthOfLongestSubstring(testArr);
console.log(res);
