/**
 * 暴力法
 * 时间复杂度：O(n^2(*☻-☻*))，空间复杂度：O(1)
 *
 */
var minSubArrayLen = function (target, nums) {
  let minimumIndex = []; // 最新数组
  let ans = Number.MAX_VALUE; // 最小数组长度
  let length = nums.length;
  for (let i = 0; i < length; i++) {
    let sum = 0;
    for (let j = i; j < length; j++) {
      sum += nums[j];
      if (sum >= target) {
        if (ans > j - i + 1) {
          ans = j - i + 1;
          minimumIndex = nums.slice(i, j + 1);
        }
        break;
      }
    }
  }
  console.log(minimumIndex);
  return ans === Number.MAX_VALUE ? 0 : ans;
};

/**
 * 滑动窗口
 */

var minSubArrayLen1 = function (target, nums) {
  const len = nums.length;
  let l = 0;
  let r = 0;
  let sum = 0;
  let res = len + 1; // 上述是 Number.MAX_VALUE 作为默认值
  while (r < len) {
    sum += nums[r++]; // 扩大窗口
    while (sum >= target) {
      res = Math.min(res, r - l); // 最小值
      sum -= nums[l++]; // 初始化，缩小窗口
    }
  }
  return res > len ? 0 : res;
};
var target = 5;
var arr = [2, 1, 1, 1, 2, 4];

const result = minSubArrayLen1(target, arr);
console.log(result);
